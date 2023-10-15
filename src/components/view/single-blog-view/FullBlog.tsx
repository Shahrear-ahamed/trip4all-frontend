import { Button } from "@/components/ui/button";
import React from "react";

export default function FullBlog() {
  return (
    <div className="space-y-10 md:col-span-3 lg:col-span-2">
      <div className=" bg-white rounded-md p-5 md:p-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-5 pl-5 text-gray-700 font-semibold relative w-fit before:block before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gray-700 before:bg-opacity-40 before:w-1">
          MAECENAS CONSECTETUR
        </h1>
        <p className="text-justify text-gray-600 font-light tracking-wide leading-6 cursor-default mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad
          minim veniam. Nunc maximus arcu sit amet accumsan imperdiet. Aliquam
          elementum efficitur ipsum nec blandit. Pellentesque posuere vitae
          metus sed auctor. Nullam accumsan fringilla ligula non pellentesque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil
          itaque qui consequuntur perspiciatis. Saepe ipsam beatae aliquam
          deleniti voluptate cum, architecto expedita dolor cumque itaque est ad
          consectetur doloremque asperiores aspernatur obcaecati autem!
          Architecto consequuntur dicta sed illum molestias reiciendis sapiente
          iusto corrupti commodi ad possimus assumenda autem, inventore
          perferendis minima amet voluptatem facilis mollitia suscipit
          laudantium! Quis ipsam rem sequi maiores, veniam praesentium dolore,
          eveniet illum laborum modi officiis totam possimus, cumque incidunt
          magni veritatis debitis nisi voluptatum nostrum aliquid repellat
          consequatur odio vitae atque. Reprehenderit provident illum impedit?
          Atque repellat doloribus veritatis quaerat nesciunt tenetur saepe
          quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          rerum necessitatibus ratione minima odio excepturi molestias eum, nemo
          nulla nam? Temporibus, deserunt inventore. Cupiditate deleniti, ut
          magni reprehenderit neque soluta? Voluptates laudantium commodi cumque
          eius. Totam consequuntur saepe dolorem eligendi? Quo nam provident
          quidem dicta quos illum nobis ex voluptates perferendis consectetur
          soluta velit iste, repellendus, labore vero magnam quisquam? Corrupti
          molestias dolorum officiis cumque voluptatum sunt placeat tenetur
          autem, distinctio et eveniet aut saepe eius, dolore nam deleniti
          blanditiis tempore? Corporis consequuntur, explicabo sequi
          reprehenderit similique quibusdam dolores exercitationem modi labore
          libero nostrum quas iusto, unde dolorum, porro mollitia error cum
          necessitatibus provident quia nulla ullam voluptates recusandae ut.
          Officia praesentium exercitationem ad architecto, velit a debitis
          ratione! Voluptatem facere, rerum cumque fugit placeat officia culpa
          voluptatibus illo. Accusamus earum non id iusto exercitationem fugiat
          reprehenderit harum nihil necessitatibus. Distinctio totam amet
          voluptas, ipsa temporibus quibusdam ex asperiores? Fugiat velit id est
          minus nisi incidunt ullam quibusdam, non, eos illum saepe inventore
          nesciunt omnis dolore ex sunt ad perferendis reiciendis tempora magnam
          earum illo dolorem optio. Hic harum deleniti, perferendis, dolore vel
          quas officiis perspiciatis accusantium magni earum eligendi possimus!
          Sint voluptas sed nesciunt amet, dolores modi provident voluptatibus!
        </p>
      </div>

      <div className="my-10 w-full flex flex-col sm:flex-row gap-5 justify-between">
        <Button className="bg-white text-gray-600 tracking-wider hover:bg-gray-100 duration-500 group relative pl-8">
          <span className="absolute top-[47%] -translate-y-1/2 left-4 group-hover:left-3 duration-500">
            &laquo;
          </span>{" "}
          Previous Post
        </Button>
        <Button className="bg-white text-gray-600 tracking-wider hover:bg-gray-100 duration-500 group relative pr-8">
          Next Post{" "}
          <span className="absolute top-[47%] -translate-y-1/2 right-4 group-hover:right-3 duration-500">
            &raquo;
          </span>
        </Button>
      </div>

      {/* // comment section */}

      <div className="w-full bg-white rounded-md p-5">
        <h4 className="text-2xl border-b-2 border-b-primary pb-2">Comments</h4>
        <div className="w-full h-20 flex items-center justify-center">
          Available sooon! Thanks 😀😀
        </div>
      </div>
    </div>
  );
}
