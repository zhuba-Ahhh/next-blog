import { Button } from "@/components/ui";
import { motion } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      <div className="mt-8 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            onClick={() => onPageChange(i + 1)}
            variant={currentPage === i + 1 ? "default" : "outline"}
            className="mx-1"
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}