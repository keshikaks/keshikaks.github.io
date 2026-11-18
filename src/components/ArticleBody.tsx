import React from "react";
import type { ArticleBlock } from "@/data/articles";

// Wrap rare emoji glyphs in a monochrome span so verbatim text is preserved
// while strictly maintaining the 3-colour visual palette (#111111, #F4EEDF, #00D6C9).
const EMOJI_SPLIT_REGEX =
  /([\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]+)/gu;
const EMOJI_TEST_REGEX =
  /^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]+$/u;

function renderTextWithMonochromeGlyphs(text: string): React.ReactNode {
  const lines = text.split("\n");

  return lines.map((line, lineIdx) => {
    const parts = line.split(EMOJI_SPLIT_REGEX);
    return (
      <React.Fragment key={lineIdx}>
        {parts.map((part, partIdx) =>
          EMOJI_TEST_REGEX.test(part) ? (
            <span key={partIdx} className="mono-glyph" aria-hidden="true">
              {part}
            </span>
          ) : (
            <React.Fragment key={partIdx}>{part}</React.Fragment>
          )
        )}
        {lineIdx < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

interface ArticleBodyProps {
  blocks: ArticleBlock[];
  articleTitle: string;
}

export function ArticleBody({ blocks, articleTitle }: ArticleBodyProps) {
  const normalizedTitle = articleTitle
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  return (
    <div className="space-y-6 text-[1.0625rem] sm:text-[1.125rem] leading-[1.9] text-[#111111]/90">
      {blocks.map((block, index) => {
        if (block.type === "divider") {
          return (
            <div
              key={index}
              role="separator"
              className="py-5 flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 bg-[#111111]/25" />
              <span className="w-1.5 h-1.5 bg-[#00D6C9]" />
              <span className="h-px w-12 bg-[#111111]/25" />
            </div>
          );
        }

        if (block.type === "heading") {
          // If the very first block simply repeats the article title verbatim, skip duplicate visual H1
          if (
            index === 0 &&
            block.text.toLowerCase().replace(/[^a-z0-9]/g, "") ===
              normalizedTitle
          ) {
            return null;
          }

          return (
            <h2
              key={index}
              className="font-serif text-2xl sm:text-[1.95rem] font-medium leading-[1.22] tracking-[-0.01em] text-[#111111] pt-6 pb-1 border-b rule-ink"
            >
              {renderTextWithMonochromeGlyphs(block.text)}
            </h2>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="my-8 border-l-[3px] border-[#00D6C9] pl-6 py-1 font-serif italic text-xl sm:text-2xl leading-[1.55] text-[#111111]"
            >
              {renderTextWithMonochromeGlyphs(block.text)}
            </blockquote>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={index}
              className={`my-6 space-y-3 pl-6 ${
                block.ordered ? "list-decimal" : "list-none pl-0"
              }`}
            >
              {block.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className={
                    block.ordered
                      ? "pl-1.5"
                      : "relative pl-6"
                  }
                >
                  {!block.ordered && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.72em] w-2 h-2 bg-[#00D6C9]"
                    />
                  )}
                  {renderTextWithMonochromeGlyphs(item)}
                </li>
              ))}
            </ListTag>
          );
        }

        return (
          <p key={index} className="break-words">
            {renderTextWithMonochromeGlyphs(block.text)}
          </p>
        );
      })}
    </div>
  );
}
