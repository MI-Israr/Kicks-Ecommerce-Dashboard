import type { productDetailCardType } from "@/Data/productDetailCard";
import React, { useState } from "react";

interface TagsAreaProps {
  product: productDetailCardType;
}

const TagsArea: React.FC<TagsAreaProps> = ({ product }) => {
  const [tags, setTags] = useState<string[]>(product.tags || []);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const input = e.currentTarget.value.trim();
      if (input && !tags.includes(input)) {
        setTags([...tags, input]);
      }
      e.currentTarget.value = "";
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Tags</label>
      <div className="flex gap-2 flex-wrap border border-[#232321] rounded-lg !p-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center h-[30px] gap-2 !px-3 !py-1 bg-[#36323B] text-white rounded-full text-sm"
          >
            {tag}
            <button
              type="button"
              className="text-white text-xs hover:text-red-400"
              onClick={() => removeTag(tag)}
            >
              ✕
            </button>
          </span>
        ))}
        <textarea
          rows={3}
          onKeyDown={handleKeyDown}
          className="flex-grow !px-2 !py-1 outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default TagsArea;
