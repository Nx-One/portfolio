import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Project } from "@/data/projects";

function parsePrice(p: string) {
  return Number(String(p).replace(/[^0-9.]/g, "")) || 0;
}

function loadProfileName(): string {
  try {
    const raw = localStorage.getItem("gc_profile");
    if (!raw) return "Guest";
    const p = JSON.parse(raw);
    const name = typeof p?.name === "string" && p.name.trim() ? p.name.trim() : "Guest";
    return name;
  } catch {
    return "Guest";
  }
}

export default function ProjectDetailModal({
  item,
  open,
  onClose,
}: {
  item: Project;
  open: boolean;
  onClose: () => void;
}) {
  const images = useMemo(() => (item.images && item.images.length ? item.images : [item.image]), [item]);
  const techStack = useMemo(() => (item.techStack && item.techStack.length ? item.techStack : []), [item]);
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between gap-4">
            <span className="line-clamp-1">{item.title}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-1">
          {/* Gallery */}
          <div>
            <div className="aspect-[5/3] overflow-hidden rounded-md border bg-muted">
              <img src={images[mainIndex]} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-125" />
            </div>
            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-5 gap-2">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setMainIndex(i)}
                    className={`overflow-hidden rounded border ${i === mainIndex ? "ring-2 ring-primary" : "ring-0"}`}
                    aria-label={`Show image ${i + 1}`}
                  >
                    <img src={src} alt={`Thumbnail ${i + 1}`} className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-4">
            {techStack.length > 1 && (
              <div className="flex flex-wrap gap-2">
              {techStack.map((tech,i) => (
                  <Badge key={i} variant="secondary">
                      {tech}
                  </Badge>
              ))}
              </div>
            )}
          </div>
        </div>

        <section className="mt-4 space-y-4">
          

          {/* Descriptions */}
          <h3 className="text-lg font-semibold">Description</h3>

          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground whitespace-pre-line">{item.description}</p>
          </div>
        </section>
        
      </DialogContent>
    </Dialog>
  );
}
