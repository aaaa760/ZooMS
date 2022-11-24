const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-[url('https://www.wallpapers.net/love-birds-hd-wallpaper/download/5120x2160.jpg')] bg-cover flex items-center mt-[-78px]">
        <div className=" w-full md:mx-center text sm:mx-20 2xs:mx-10 select-none">
          <h1 className="xs:text-6xl text-7xl  font-serif  text-center text-clip table-caption bg-blend-color ">
            Welcome to Zooms
          </h1>
        </div>
      </div>

      <div className="mt-5 mx-10 ">
        <h1 className="text-3xl text-orange-900 font-bold">MISSION</h1>
        <br />
        <p className="text-black text-lg">
          {" "}
          “To connect visitors and animals through exemplary animal welfare and
          care, best educational and inspirational experiences, fostering public
          appreciation and support for wild animals and conservation”{" "}
        </p>

        <h1 className="mt-5 text-3xl text-orange-900 font-bold">VISION</h1>
        <p className="text-black text-lg">
          {" "}
          “To be a world-class zoo, a leader in animal welfare and conservation,
          and a community resource for education and inspiration”{" "}
        </p>
        <h1 className="mt-5 text-3xl text-orange-900 font-bold">ZOOMS</h1>
        <p>
          The zoo is located in the heart of the city and its easy accessibility
          for public transport and other various tourist places has made it a
          much favored tourist center. Mysuru Zoo sports favorable climate, the
          temperatures goes up to 35 degrees in peak summer and below 20 degrees
          in winters.
        </p>
        <br />
        <ul className="list-disc list-inside">
          <li>Wide variety of animals; native and exotics</li>
          <li>Excellent visitor facilities</li>
          <li>Well maintained and clean enclosures with good vegetation</li>
          <li>Centre of Conservation Education</li>
          <li>
            Excellent waste management and water harvesting system in place
          </li>
          <li>Self sustaining Zoo (earns its own revenue)</li>
          <li>Rescue and Rehabilitation of Wild Animals</li>
        </ul>

        <h1 className="mt-5 text-3xl text-orange-900 font-bold">
          MY BELOVED FOUNDER
        </h1>
        <p className="mb-2">
          His Highness SriChamarajendra Wodeyar Bahadur, the 23rd Ruler of Yadu
          Dynasty started this zoo during the year 1892. This Zoo Garden was
          designed not for amusement of the Royalty but to educate the people of
          the State about Wildlife. It has the unique distinction of breeding
          rare species in captivity and emphasis was laid towards the comfort
          and wellbeing of the animals.
        </p>
        <p className="mb-2">
          The special feature of this zoo is the meticulous planning; they
          resorted in recreating the natural habitat for the different species.
          The ideas and techniques used were really revolutionary for that
          period.
        </p>
        <p className="mb-10">
          In commemoration of esteemed founder, a bust of His Highness Sri
          Chamarajendra Wodeyar was installed near the entrance of zoo during
          the Centenary Celebration.
        </p>
      </div>
    </>
  );
}

export default Home;
