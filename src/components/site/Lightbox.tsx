import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { categoryLabel, type GalleryItem } from "@/lib/projects";

type Props = {
  items: GalleryItem[];
  index: number | null;
  onIndexChange: (i: number | null) => void;
};

export function Lightbox({ items, index, onIndexChange }: Props) {
  const open = index !== null;
  const item = index !== null ? items[index] : null;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onIndexChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onIndexChange(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-night/95 backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed inset-0 z-[61] flex flex-col outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0"
          aria-describedby={undefined}
        >
          {item && (
            <>
              <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-10">
                <div>
                  <Dialog.Title className="font-wide text-base font-bold md:text-lg">{item.client}</Dialog.Title>
                  <p className="eyebrow mt-1 text-brass">{categoryLabel(item.category)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="eyebrow text-muted-foreground tabular-nums">
                    {String(index! + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </span>
                  <Dialog.Close
                    className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-brass"
                    aria-label="Kapat"
                  >
                    <X className="h-5 w-5" />
                  </Dialog.Close>
                </div>
              </div>
              <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-24">
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  className="max-h-full max-w-full rounded-sm object-contain animate-in fade-in-0 zoom-in-95 duration-500"
                />
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-night/60 backdrop-blur hover:border-brass md:left-8"
                  aria-label="Önceki görsel"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-night/60 backdrop-blur hover:border-brass md:right-8"
                  aria-label="Sonraki görsel"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
