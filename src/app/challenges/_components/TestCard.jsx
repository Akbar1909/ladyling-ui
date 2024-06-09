import { formatDate } from "@/services/time";
import Link from "next/link";

const TestCard = ({
  _count,
  name,
  id,
  description,
  startDate,
  endDate,
  status,
  createdAt,
}) => {
  return (
    <Link href={`/challenges/${id}`}>
      <div className="h-full relative group hover:rounded-md flex items-center border hover:bg-yellow-300 hover:border-yellow-300 border-gray-100 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
        <div className="w-24 bg-yellow-300 h-full group-hover:rounded-tr-none group-hover:rounded-br-none" />
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h2 className="font-medium text-gray-900 sm:text-lg mb-1">{name}</h2>

          <p className="mt-1 text-sm text-gray-700 flex flex-row gap-1">
            <span>Questions:</span> <span>{_count?.questions}</span>
          </p>
          <p className="mt-1 text-sm text-gray-700 flex flex-row gap-1">
            <span>Attempts:</span> <span> {_count?.attempts}</span>
          </p>
        </div>
        <span className="absolute bottom-[5px] right-[5px] text-xs text-gray-400">
          {formatDate(createdAt)}
        </span>
      </div>
    </Link>
  );
};

export default TestCard;
