// import type { productDetailCardType } from "@/Data/productDetailCard";

// interface ProductDetailUploadProps {
//   product: productDetailCardType;
// }

// const ProductDetailUpload: React.FC<ProductDetailUploadProps> = ({
//   product,
// }) => {
//   return (
//     <div className="p-4 bg-white  flex flex-col gap-6 w-full">
//       <div className="w-full flex justify-center">
//         <img
//           src={product.img}
//           alt="Product"
//           className="rounded-lg w-[300px] object-contain"
//         />
//       </div>

//       <div>
//         <h2 className="font-semibold ">Product Gallery</h2>

//         <div className="border-2 border-dashed border-gray-300 rounded-lg !p-6 text-center cursor-pointer hover:bg-gray-50 !mb-4">
//           <div className="flex flex-col items-center gap-2 text-gray-600">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-10 h-10 text-blue-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 16l5.58-5.58a2 2 0 012.83 0L21 21M14 14l7 7M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2h-5.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 0010.586 2H5a2 2 0 00-2 2v16a2 2 0 002 2z"
//               />
//             </svg>
//             <p>
//               Drop your image here, or{" "}
//               <span className="text-blue-500">browse</span>
//             </p>
//             <p className="text-sm text-gray-400">Jpeg, png are allowed</p>
//           </div>
//         </div>

//         <div className="mt-4 flex flex-col gap-3">
//           {[1, 2, 3, 4].map((i) => (
//             <div
//               key={i}
//               className="flex items-center justify-between rounded-lg !p-4 bg-[#FAFAFA]"
//             >
//               <div className="flex items-center justify-between gap-4 w-[100%]">
//                 <img
//                   src={product.img}
//                   alt="Thumbnail"
//                   className="w-16 h-16 rounded object-cover"
//                 />
//                 <div className="w-[100%]  flex flex-col gap-4">
//                   <p className="text-gray-700 text-sm w-[100%]">
//                     Product thumbnail.png
//                   </p>
//                   <div className="h-[6px] w-[100%] bg-blue-500 rounded-full"></div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <img className="" src="/src/assets/done.svg" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-4 mt-4">
//         <button className="bg-[#232321] text-white !px-6 !py-2 rounded-lg hover:bg-gray-700 cursor-pointer">
//           UPDATE
//         </button>
//         <button className="bg-red-600 text-white !px-6 !py-2 rounded-lg hover:bg-red-700 cursor-pointer">
//           DELETE
//         </button>
//         <button className="border border-gray-400 text-gray-700 !px-6 !py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
//           CANCEL
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailUpload;
import React, { useCallback, useEffect, useRef, useState } from "react";

export type UploadFn = (
  file: File,
  onProgress: (progressPercent: number) => void
) => Promise<{ url: string } | void>;

// Internal item model
type Item = {
  id: string;
  file: File;
  previewUrl: string; // object URL for the thumbnail
  progress: number; // 0..100
  status: "queued" | "uploading" | "done" | "error";
  url?: string; // returned by server
  error?: string;
};

export type ProductGalleryUploaderProps = {
  accept?: string; // defaults to 'image/png, image/jpeg'
  maxFiles?: number; // optional soft cap
  uploadFn?: UploadFn; // plug your real upload here
  className?: string;
};

const defaultAccept = "image/png, image/jpeg";

// Simulated upload for demo/use-out-of-the-box
const mockUpload: UploadFn = async (file, onProgress) => {
  const totalTime = 800 + Math.random() * 1200; // 0.8–2s
  const started = performance.now();

  return new Promise((resolve) => {
    const tick = () => {
      const elapsed = performance.now() - started;
      const pct = Math.min(100, Math.round((elapsed / totalTime) * 100));
      onProgress(pct);
      if (pct >= 100) {
        // pretend a CDN URL
        resolve({
          url: `https://cdn.example.com/${encodeURIComponent(file.name)}`,
        });
      } else requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
};

// A small checkmark icon (inline SVG) so we don't rely on external icon libs
const CheckCircle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className}>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.7 7.7-5.2 5.2a1 1 0 0 1-1.4 0l-2.1-2.1a1 1 0 1 1 1.4-1.4l1.4 1.4 4.5-4.5a1 1 0 1 1 1.4 1.4Z"
    />
  </svg>
);

// Trash icon
const Trash: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className}>
    <path
      fill="currentColor"
      d="M9 3a1 1 0 0 0-1 1v1H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-3V4a1 1 0 0 0-1-1H9Zm-2 7a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0v-7Zm5 0a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0v-7Zm5 0a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0v-7ZM7 21a2 2 0 0 1-2-2V9h14v10a2 2 0 0 1-2 2H7Z"
    />
  </svg>
);

export default function ProductGalleryUploader({
  accept = defaultAccept,
  maxFiles,
  uploadFn = mockUpload,
  className,
}: ProductGalleryUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Cleanup any remaining object URLs when the component unmounts
  useEffect(() => {
    return () => {
      try {
        items.forEach((i) => URL.revokeObjectURL(i.previewUrl));
      } catch {
        /* noop */
      }
    };
  }, []); // unmount-only

  const onFiles = useCallback(
    (files: FileList | File[]) => {
      const asArray = Array.from(files);

      const filtered = asArray.filter((f) => {
        if (!accept) return true;
        const ok = accept
          .split(",")
          .map((s) => s.trim())
          .some((a) => {
            // allow mime (image/png) or extension (.png)
            return a.startsWith(".")
              ? f.name.toLowerCase().endsWith(a.toLowerCase())
              : f.type === a;
          });
        return ok;
      });

      const allowed = maxFiles
        ? filtered.slice(0, Math.max(0, maxFiles - items.length))
        : filtered;
      if (allowed.length === 0) return;

      // Create object URLs IMPERATIVELY (not via a hook) and store them
      const toAdd: Item[] = allowed.map((file, i) => ({
        id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`,
        file,
        previewUrl: URL.createObjectURL(file),
        progress: 0,
        status: "queued",
      }));

      setItems((prev) => [...prev, ...toAdd]);

      // kick off uploads in the next microtask to ensure state has been updated first
      Promise.resolve().then(() => {
        toAdd.forEach((item) => startUpload(item));
      });
    },
    [accept, maxFiles, items.length]
  );

  const startUpload = (item: Item) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === item.id ? { ...it, status: "uploading" } : it
      )
    );

    const onProgress = (p: number) => {
      setItems((prev) =>
        prev.map((it) =>
          it.id === item.id
            ? { ...it, progress: Math.max(0, Math.min(100, p)) }
            : it
        )
      );
    };

    uploadFn(item.file, onProgress)
      .then((res) => {
        setItems((prev) =>
          prev.map((it) =>
            it.id === item.id
              ? { ...it, progress: 100, status: "done", url: (res as any)?.url }
              : it
          )
        );
      })
      .catch((err: any) => {
        setItems((prev) =>
          prev.map((it) =>
            it.id === item.id
              ? { ...it, status: "error", error: String(err?.message ?? err) }
              : it
          )
        );
      });
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0)
      onFiles(e.dataTransfer.files);
  };

  const onBrowse = () => inputRef.current?.click();

  const removeItem = (id: string) => {
    setItems((prev) => {
      const target = prev.find((i) => i.id === id);
      if (target) {
        try {
          URL.revokeObjectURL(target.previewUrl);
        } catch {
          /* noop */
        }
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  return (
    <div className={"w-full max-w-2xl mx-auto " + (className ?? "")}>
      {/* Drop Zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onBrowse();
        }}
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all select-none cursor-pointer outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-white/70 ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        aria-label="File uploader drop zone"
        onClick={onBrowse}
      >
        <div className="flex flex-col items-center gap-2">
          {/* Minimal image icon */}
          <svg
            className="w-10 h-10 text-blue-600"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 2v10l3.5-3.5 2.5 2.5L15 10l4 4V5H5Zm0 14h14v-1.6l-4-4-4 4-3.5-3.5L5 17.4V19Zm3-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            />
          </svg>
          <p className="text-gray-700 font-medium">
            Drop your image here, or{" "}
            <span className="text-blue-600 underline">browse</span>
          </p>
          <p className="text-xs text-gray-400">Jpeg, png are allowed</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          className="sr-only"
          onChange={(e) => {
            if (e.target.files) onFiles(e.target.files);
            e.currentTarget.value = "";
          }}
        />
      </div>

      {/* Files list */}
      <div className="!mt-4 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#FAFAFA] rounded-xl shadow-sm shadow-gray-200  !p-4 flex items-center gap-4 !mt-4"
          >
            {/* Thumbnail */}
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.previewUrl}
                alt={item.file.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle: name + progress */}
            <div className="flex-1 min-w-0">
              <div className="text-sm text-gray-700 truncate">
                {item.file.name}
              </div>

              <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    item.status === "error" ? "bg-red-500" : "bg-blue-600"
                  }`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>

              {item.status === "error" && (
                <p className="text-xs text-red-600 mt-1">
                  {item.error ?? "Upload failed"}
                </p>
              )}
            </div>

            {/* Right-side actions/status */}
            <div className="flex items-center gap-3">
              {item.status === "done" ? (
                <CheckCircle className="w-6 h-6 text-blue-600" />
              ) : item.status === "error" ? (
                <span className="text-xs text-red-600">Error</span>
              ) : (
                <span className="text-xs text-gray-400 w-10 text-right">
                  {item.progress}%
                </span>
              )}

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="p-2 rounded-lg hover:bg-gray-100 active:scale-95 transition"
                aria-label={`Remove ${item.file.name}`}
                title="Remove"
              >
                <Trash className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
================================================================================
TESTS — copy into ProductGalleryUploader.test.tsx (Jest + @testing-library/react)
================================================================================
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductGalleryUploader, { UploadFn } from "./ProductGalleryUploader";

// Helpers to create a mock File
function createFile(name: string, type = "image/png") {
  return new File([new Uint8Array([1,2,3])], name, { type });
}

// Mock URL APIs to avoid errors in JSDOM
global.URL.createObjectURL = jest.fn(() => "blob://test") as any;
global.URL.revokeObjectURL = jest.fn() as any;

test("renders dropzone text", () => {
  render(<ProductGalleryUploader />);
  expect(screen.getByText(/Drop your image here/i)).toBeInTheDocument();
});

test("calls uploadFn for each selected file and shows rows", async () => {
  const uploadFn: UploadFn = (file, onProgress) => {
    onProgress(50);
    return Promise.resolve({ url: `https://cdn/${file.name}` });
  };
  render(<ProductGalleryUploader uploadFn={uploadFn} />);

  const input = screen.getByLabelText(/File uploader drop zone/i).nextSibling as HTMLInputElement;
  const f1 = createFile("a.png");
  const f2 = createFile("b.png");
  fireEvent.change(input, { target: { files: [f1, f2] } });

  // Two rows should appear
  expect(await screen.findAllByText(/a.png|b.png/)).toHaveLength(2);

  // Progress text appears during upload
  expect(screen.getAllByText(/50%|100%/).length).toBeGreaterThan(0);

  await waitFor(() => {
    // Check icons for done state (title from svg is not provided so check by alt text existence + absence of error text)
    expect(screen.queryByText(/Error/)).toBeNull();
  });
});

test("remove button deletes the row and revokes URL", async () => {
  const uploadFn: UploadFn = (file, onProgress) => {
    onProgress(100);
    return Promise.resolve({ url: `https://cdn/${file.name}` });
  };
  render(<ProductGalleryUploader uploadFn={uploadFn} />);

  const input = screen.getByLabelText(/File uploader drop zone/i).nextSibling as HTMLInputElement;
  const f1 = createFile("c.png");
  fireEvent.change(input, { target: { files: [f1] } });

  const removeBtn = await screen.findByRole("button", { name: /Remove c.png/i });
  fireEvent.click(removeBtn);

  await waitFor(() => {
    expect(screen.queryByText("c.png")).toBeNull();
    expect(URL.revokeObjectURL).toHaveBeenCalled();
  });
});
*/
