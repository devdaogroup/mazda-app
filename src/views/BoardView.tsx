import WhatsTopIcon from "@/components/icons/WhatsTopIcon";
import BoardTable from "@/components/sections/BoardTableSection";
import RollingTextSection from "@/components/sections/RollingTextSection";
import Touch from "@/components/sections/Touch";
const BoardView = () => {
  const hardCodedData = [
    {
      Rank: 1,
      UserName: "Alexander Astoni",
      UploadedURLs: "12",
      MINTPoint: "4563 Pt",
      image: "/img/profile/avatar.png", // Replace with the actual URL
    },
    {
      Rank: 2,
      UserName: "Alexander Astoni",
      UploadedURLs: "12",
      MINTPoint: "4563 Pt",
      image: "/img/profile/avatar.png", // Replace with the actual URL
    },
    {
      Rank: 3,
      UserName: "Alexander Astoni",
      UploadedURLs: "12",
      MINTPoint: "4563 Pt",
      image: "/img/profile/avatar.png", // Replace with the actual URL
    },
    {
      Rank: 4,
      UserName: "Alexander Astoni",
      UploadedURLs: "12",
      MINTPoint: "4563 Pt",
      image: "/img/profile/avatar.png", // Replace with the actual URL
    },
    {
      Rank: 5,
      UserName: "Alexander Astoni",
      UploadedURLs: "12",
      MINTPoint: "4563 Pt",
      image: "/img/profile/avatar.png", // Replace with the actual URL
    },
    {
      Rank: 6,
      UserName: "Alexander Astoni",
      UploadedURLs: "12",
      MINTPoint: "4563 Pt",
      image: "/img/profile/avatar.png", // Replace with the actual URL
    },
    // Add more data here as needed
  ];

  return (
    <>
      <section>
        <RollingTextSection />
      </section>

      <section className="flex items-center justify-center mt-6 mb-36">
        <WhatsTopIcon />
      </section>

      <section>
        <BoardTable data={hardCodedData} />
      </section>
      <article>2</article>

      <section>
        <Touch />
      </section>
    </>
  );
};

export default BoardView;
