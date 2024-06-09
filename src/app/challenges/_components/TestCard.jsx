import Link from "next/link";
import { twMerge } from "tailwind-merge";

const TestCard = ({
  _count,
  name,
  id,
  description,
  startDate,
  endDate,
  status,
}) => {
  return (
    <Link href={`/challenges/${id}`}>
      <div className="group relative block h-full bg-white before:absolute before:inset-0  before:border-2 before:border-dashed before:border-gray-700">
        <div className="h-full border-2 border-gray-700 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <span aria-hidden role="img" className="text-lg sm:text-xl">
                {status === "active"
                  ? "⚡"
                  : status === "upcoming"
                  ? "⏳"
                  : "📅"}
              </span>
            </div>
            <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">
              {name}
            </h2>
            <p className="flex justify-between items-center">
              <span className="" mt-1 text-sm text-gray-700>
                {_count?.questions} ❓
              </span>
              <span className="" mt-1 text-sm text-gray-700>
                {_count?.attempts} 🔄
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TestCard;
