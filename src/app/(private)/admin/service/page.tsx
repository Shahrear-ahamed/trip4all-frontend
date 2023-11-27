"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { toast } from "react-toastify";
import { IService } from "@/interface";
import Image from "next/image";
import {
  useDeleteSingleTourMutation,
  useGetAllToursQuery,
} from "@/redux/api/tour/tourApi";

export default function AllServices() {
  const [deleteService] = useDeleteSingleTourMutation();

  const { data, isLoading, isSuccess, isError } = useGetAllToursQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteService(id).unwrap();

      console.log(res);

      if (!res?.id) {
        return toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }

      toast.success("Services deleted successfully", {
        position: "top-right",
        hideProgressBar: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  console.log(data);

  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">All Tags</h1>
      <Table className="mt-5 text-center">
        <TableCaption>A list of recent services</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-xl">Image</TableHead>
            <TableHead className="text-center text-xl">Title</TableHead>
            <TableHead className="text-center text-xl">Price</TableHead>
            <TableHead className="text-center text-xl">Slot</TableHead>
            <TableHead className="text-center text-xl">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            data?.data?.map((service: IService) => (
              <TableRow key={service.id}>
                <TableCell className="flex justify-center">
                  <Image
                    src={service.thumbnail}
                    height={60}
                    width={100}
                    alt={service.title}
                  />
                </TableCell>
                <TableCell>{service.title}</TableCell>
                <TableCell>{service.price}</TableCell>
                <TableCell>{service.slots}</TableCell>
                <TableCell>
                  <div>
                    <Link href={`/admin/service/${service.id}/edit`}>
                      <Button variant="ghost">Edit</Button>
                    </Link>
                    <Link href={`/admin/${service.id}/view`}>
                      <Button variant="ghost">View Service</Button>
                    </Link>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(service?.id)}>
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
