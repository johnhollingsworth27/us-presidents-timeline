// src/data/presidents.js

const presidents = [
    {
      id: 1,
      name: "Joe Biden",
      party: "Democratic",
      term: "2021–Present",
      previousPositions: [
        "Vice President of the United States (2009–2017)",
        "U.S. Senator from Delaware (1973–2009)",
        "Attorney General of Delaware (1970–1973)"
      ],
      advisors: {
        secretaryOfState: "Antony Blinken",
        secretaryOfDefense: "Lloyd Austin",
        secretaryOfTreasury: "Janet Yellen",
        directorOfCIA: "TBD",
        directorOfNationalIntelligence: "TBD"
      },
      image: "/images/joe_biden.jpg"
    },
    {
      id: 2,
      name: "Donald Trump",
      party: "Republican",
      term: "2017–2021",
      previousPositions: [
        "Businessman",
        "TV Host (The Apprentice)"
      ],
      advisors: {
        secretaryOfState: "Rex Tillerson (2017–2018), Mike Pompeo (2018–2021)",
        secretaryOfDefense: "James Mattis (2017–2019), Mark Esper (2019–2020), Christopher Miller (2020–2021)",
        secretaryOfTreasury: "Steven Mnuchin",
        directorOfCIA: "Mike Pompeo",
        directorOfNationalIntelligence: "John Ratcliffe"
      },
      image: "/images/donald_trump.jpg"
    },
    {
      id: 3,
      name: "Barack Obama",
      party: "Democratic",
      term: "2009–2017",
      previousPositions: [
        "U.S. Senator from Illinois (2005–2008)",
        "Illinois State Senator (1997–2004)",
        "Community Organizer"
      ],
      advisors: {
        secretaryOfState: "Hillary Clinton (2009–2013), John Kerry (2013–2017)",
        secretaryOfDefense: "Robert Gates (2009–2011), Leon Panetta (2011–2013), Chuck Hagel (2013–2015), Ashton Carter (2015–2017)",
        secretaryOfTreasury: "Timothy Geithner (2009–2013), Jacob Lew (2013–2017)",
        directorOfCIA: "Leon Panetta (2009–2011), David Petraeus (2011–2012), John Brennan (2013–2017)",
        directorOfNationalIntelligence: "James Clapper (2009–2017)"
      },
      image: "/images/barack_obama.jpg"
    },
    // Add more presidents...
    {
      id: 4,
      name: "George W. Bush",
      party: "Republican",
      term: "2001–2009",
      previousPositions: [
        "Governor of Texas (1995–2000)",
        "Businessman"
      ],
      advisors: {
        secretaryOfState: "Colin Powell (2001–2005), Condoleezza Rice (2005–2009)",
        secretaryOfDefense: "Donald Rumsfeld (2001–2006), Robert Gates (2006–2009)",
        secretaryOfTreasury: "Paul O'Neill (2001–2002), John Snow (2003–2006), Henry Paulson (2006–2009)",
        directorOfCIA: "George Tenet (1997–2004), Porter Goss (2004–2006), Michael V. Hayden (2006–2009)",
        directorOfNationalIntelligence: "John Negroponte (2005–2007), Mike McConnell (2007–2009)"
      },
      image: "/images/george_w_bush.jpg"
    },
    {
      id: 5,
      name: "Bill Clinton",
      party: "Democratic",
      term: "1993–2001",
      previousPositions: [
        "Governor of Arkansas (1979–1981, 1983–1992)",
        "Attorney General of Arkansas (1977–1979)"
      ],
      advisors: {
        secretaryOfState: "Warren Christopher (1993–1997), Madeleine Albright (1997–2001)",
        secretaryOfDefense: "William Perry (1994–1997), William Cohen (1997–2001)",
        secretaryOfTreasury: "Lloyd Bentsen (1993–1994), Robert Rubin (1995–1999), Lawrence Summers (1999–2001)",
        directorOfCIA: "John Deutch (1995–1996), George Tenet (1997–1999), R. James Woolsey Jr. (1999–2001)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/bill_clinton.jpg"
    },
    {
      id: 6,
      name: "George H.W. Bush",
      party: "Republican",
      term: "1989–1993",
      previousPositions: [
        "Vice President of the United States (1981–1989)",
        "Director of Central Intelligence (1976–1977)",
        "U.S. Ambassador to the United Nations (1971–1973)"
      ],
      advisors: {
        secretaryOfState: "James Baker (1989–1992)",
        secretaryOfDefense: "Dick Cheney (1989–1993)",
        secretaryOfTreasury: "Nicholas F. Brady (1988–1993)",
        directorOfCIA: "William J. Casey (1981–1987), William H. Webster (1987–1991), Robert Gates (1991–1993)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/george_hw_bush.jpg"
    },
    {
      id: 7,
      name: "Ronald Reagan",
      party: "Republican",
      term: "1981–1989",
      previousPositions: [
        "Governor of California (1967–1975)",
        "Actor",
        "President of the Screen Actors Guild"
      ],
      advisors: {
        secretaryOfState: "Alexander Haig (1981–1982), George Shultz (1982–1989)",
        secretaryOfDefense: "Caspar Weinberger (1981–1987), Frank Carlucci (1987–1989)",
        secretaryOfTreasury: "Donald Regan (1981–1985), James Baker (1985–1988), Nicholas F. Brady (1988–1989)",
        directorOfCIA: "William Casey (1981–1987), William H. Webster (1987–1991)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/ronald_reagan.jpg"
    },
    {
      id: 8,
      name: "Jimmy Carter",
      party: "Democratic",
      term: "1977–1981",
      previousPositions: [
        "Governor of Georgia (1971–1975)",
        "Georgia State Senator (1967–1971)",
        "Naval Officer"
      ],
      advisors: {
        secretaryOfState: "Cyrus Vance (1977–1980), Edmund Muskie (1980–1981)",
        secretaryOfDefense: "Harold Brown (1977–1981)",
        secretaryOfTreasury: "W. Michael Blumenthal (1977–1979), G. William Miller (1979–1981)",
        directorOfCIA: "George H. W. Bush (1976–1977)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/jimmy_carter.jpg"
    },
    {
      id: 9,
      name: "Gerald Ford",
      party: "Republican",
      term: "1974–1977",
      previousPositions: [
        "Vice President of the United States (1973–1974)",
        "U.S. Representative from Michigan (1949–1973)",
        "House Minority Leader (1965–1973)"
      ],
      advisors: {
        secretaryOfState: "Henry Kissinger (1973–1977)",
        secretaryOfDefense: "James R. Schlesinger (1973–1977)",
        secretaryOfTreasury: "William E. Simon (1974–1977)",
        directorOfCIA: "Richard Helms (1966–1973), James Schlesinger (1973–1976), George H. W. Bush (1976–1977)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/gerald_ford.jpg"
    },
    {
      id: 10,
      name: "Richard Nixon",
      party: "Republican",
      term: "1969–1974",
      previousPositions: [
        "Vice President of the United States (1953–1961)",
        "U.S. Senator from California (1950–1953)",
        "House Minority Leader (1953)"
      ],
      advisors: {
        secretaryOfState: "William Rogers (1969–1973), Henry Kissinger (1973–1977)",
        secretaryOfDefense: "Melvin Laird (1969–1973), Elliot Richardson (1973), James Schlesinger (1973–1975)",
        secretaryOfTreasury: "David M. Kennedy (1969–1971), John B. Connally (1971–1972), George P. Shultz (1972–1974)",
        directorOfCIA: "Richard Helms (1966–1973), James Schlesinger (1973–1976)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/richard_nixon.jpg"
    },
    {
      id: 11,
      name: "Lyndon B. Johnson",
      party: "Democratic",
      term: "1963–1969",
      previousPositions: [
        "Vice President of the United States (1961–1963)",
        "U.S. Senator from Texas (1949–1961)",
        "House Minority Leader (1953–1961)"
      ],
      advisors: {
        secretaryOfState: "Dean Rusk (1961–1969)",
        secretaryOfDefense: "Robert McNamara (1961–1968), Clark Clifford (1968–1969)",
        secretaryOfTreasury: "C. Douglas Dillon (1961–1965), Henry H. Fowler (1965–1969)",
        directorOfCIA: "John McCone (1961–1965), William Raborn (1965–1966), Richard Helms (1966–1973)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/lyndon_b_johnson.jpg"
    },
    {
      id: 12,
      name: "John F. Kennedy",
      party: "Democratic",
      term: "1961–1963",
      previousPositions: [
        "U.S. Senator from Massachusetts (1953–1960)",
        "Representative from Massachusetts (1947–1953)"
      ],
      advisors: {
        secretaryOfState: "Dean Rusk (1961–1969)",
        secretaryOfDefense: "Robert McNamara (1961–1968)",
        secretaryOfTreasury: "C. Douglas Dillon (1958–1961)",
        directorOfCIA: "John McCone (1961–1965)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/john_f_kennedy.jpg"
    },
    {
      id: 13,
      name: "Dwight D. Eisenhower",
      party: "Republican",
      term: "1953–1961",
      previousPositions: [
        "Supreme Commander of the Allied Forces in Europe (WWII)",
        "General of the Army",
        "President of Columbia University (1948–1953)"
      ],
      advisors: {
        secretaryOfState: "John Foster Dulles (1953–1959), Christian Herter (1959–1961)",
        secretaryOfDefense: "Charles E. Wilson (1953–1957), Neil McElroy (1957–1959), Thomas S. Gates Jr. (1959–1961)",
        secretaryOfTreasury: "George M. Humphrey (1953–1957), Robert B. Anderson (1957–1961)",
        directorOfCIA: "Allen Dulles (1953–1961)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/dwight_d_eisenhower.jpg"
    },
    {
      id: 14,
      name: "Harry S. Truman",
      party: "Democratic",
      term: "1945–1953",
      previousPositions: [
        "Vice President of the United States (1945)",
        "U.S. Senator from Missouri (1935–1945)"
      ],
      advisors: {
        secretaryOfState: "James F. Byrnes (1945–1947), George Marshall (1947–1949), Dean Acheson (1949–1953)",
        secretaryOfDefense: "James Forrestal (1947–1949), Louis A. Johnson (1949–1950), George C. Marshall (1950–1951), Robert A. Lovett (1951–1953)",
        secretaryOfTreasury: "Henry Morgenthau Jr. (1945–1946), Fred M. Vinson (1946–1949), George M. Humphrey (1949–1953)",
        directorOfCIA: "Roscoe H. Hillenkoetter (1947–1950), Walter Bedell Smith (1950–1953)",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/harry_s_truman.jpg"
    },
    {
      id: 15,
      name: "Franklin D. Roosevelt",
      party: "Democratic",
      term: "1933–1945",
      previousPositions: [
        "Governor of New York (1929–1932)",
        "Assistant Secretary of the Navy (1913–1920)"
      ],
      advisors: {
        secretaryOfState: "Cordell Hull (1933–1944), Edward Stettinius Jr. (1944–1945)",
        secretaryOfDefense: "N/A (Separate Secretary of Defense not established)",
        secretaryOfWar: "Henry Stimson (1933–1945)",
        secretaryOfTheNavy: "Frank Knox (1933–1939), Claude A. Swanson (1939–1944), James V. Forrestal (1944–1945)",
        secretaryOfTreasury: "William H. Woodin (1933–1934), Henry Morgenthau Jr. (1934–1945)",
        directorOfCIA: "N/A",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/franklin_d_roosevelt.jpg"
    },
    {
      id: 16,
      name: "Herbert Hoover",
      party: "Republican",
      term: "1929–1933",
      previousPositions: [
        "Secretary of Commerce (1921–1928)",
        "Engineer",
        "Mining Consultant"
      ],
      advisors: {
        secretaryOfState: "Henry L. Stimson (1929–1933)",
        secretaryOfDefense: "N/A (Separate Secretary of Defense not established)",
        secretaryOfWar: "James W. Good (1929–1933)",
        secretaryOfTheNavy: "Curtis D. Wilbur (1927–1933)",
        secretaryOfTreasury: "Andrew W. Mellon (1921–1932), Ogden L. Mills (1932–1933)",
        directorOfCIA: "N/A",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/herbert_hoover.jpg"
    },
    {
      id: 17,
      name: "Calvin Coolidge",
      party: "Republican",
      term: "1923–1929",
      previousPositions: [
        "Vice President of the United States (1921–1923)",
        "Governor of Massachusetts (1919–1921)",
        "U.S. Representative from Massachusetts (1901–1911)"
      ],
      advisors: {
        secretaryOfState: "Charles Evans Hughes (1921–1925), Frank B. Kellogg (1925–1929)",
        secretaryOfDefense: "N/A (Separate Secretary of Defense not established)",
        secretaryOfWar: "John W. Weeks (1921–1925), Edwin C. Denby (1925–1929)",
        secretaryOfTheNavy: "Curtis D. Wilbur (1923–1929)",
        secretaryOfTreasury: "Andrew W. Mellon (1921–1932)",
        directorOfCIA: "N/A",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/calvin_coolidge.jpg"
    },
    {
      id: 18,
      name: "Warren G. Harding",
      party: "Republican",
      term: "1921–1923",
      previousPositions: [
        "Vice President of the United States (1921)",
        "U.S. Senator from Ohio (1915–1921)",
        "Governor of Ohio (1915)"
      ],
      advisors: {
        secretaryOfState: "Charles Evans Hughes (1921–1925)",
        secretaryOfDefense: "N/A (Separate Secretary of Defense not established)",
        secretaryOfWar: "John W. Weeks (1921–1925)",
        secretaryOfTheNavy: "Edwin Denby (1921–1923)",
        secretaryOfTreasury: "Andrew W. Mellon (1921–1932)",
        directorOfCIA: "N/A",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/warren_g_harding.jpg"
    },
    {
      id: 19,
      name: "Woodrow Wilson",
      party: "Democratic",
      term: "1913–1921",
      previousPositions: [
        "Governor of New Jersey (1911–1913)",
        "President of Princeton University (1902–1910)",
        "U.S. Senator from New Jersey (1911)"
      ],
      advisors: {
        secretaryOfState: "William Jennings Bryan (1913–1915), Robert Lansing (1915–1920)",
        secretaryOfDefense: "N/A (Separate Secretary of Defense not established)",
        secretaryOfWar: "Newton D. Baker (1913–1916), Henry L. Stimson (1916–1921)",
        secretaryOfTheNavy: "Josephus Daniels (1913–1921)",
        secretaryOfTreasury: "William Gibbs McAdoo (1913–1918), Carter Glass (1918–1920), David F. Houston (1920–1921)",
        directorOfCIA: "N/A",
        directorOfNationalIntelligence: "N/A"
      },
      image: "/images/woodrow_wilson.jpg"
    },
    {
        id: 20,
        name: "William Howard Taft",
        party: "Republican",
        term: "1909–1913",
        previousPositions: [
          "Chief Justice of the United States (1921–1930)",
          "Governor-General of the Philippines (1901–1903)",
          "Assistant Secretary of War (1890–1894)"
        ],
        advisors: {
          secretaryOfState: "Philander C. Knox (1909–1913)",
          secretaryOfWar: "Jacob M. Dickinson (1909–1911), Newton D. Baker (1911–1913)",
          secretaryOfTheNavy: "George von Lengerke Meyer (1909–1910), Josephus Daniels (1910–1913)",
          secretaryOfTreasury: "Franklin MacVeagh (1909–1913)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/william_howard_taft.jpg"
      },
      {
        id: 21,
        name: "Theodore Roosevelt",
        party: "Republican",
        term: "1901–1909",
        previousPositions: [
          "Governor of New York (1899–1900)",
          "Assistant Secretary of the Navy (1897–1898)",
          "U.S. Civil Service Commissioner (1889–1895)"
        ],
        advisors: {
          secretaryOfState: "John Hay (1901–1905), Elihu Root (1905–1909)",
          secretaryOfWar: "William H. Taft (1901–1905), Elihu Root (1905–1909)",
          secretaryOfTheNavy: "John Davis Long (1901), William Moody (1901–1904), William Henry Moody (1904–1909)",
          secretaryOfTreasury: "Leslie M. Shaw (1901–1902), Lyman J. Gage (1902–1909)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/theodore_roosevelt.jpg"
      },
      {
        id: 22,
        name: "William McKinley",
        party: "Republican",
        term: "1897–1901",
        previousPositions: [
          "Governor of Ohio (1892–1896)",
          "U.S. Representative from Ohio (1877–1891)",
          "Solicitor of the Interior (1875–1876)"
        ],
        advisors: {
          secretaryOfState: "John Sherman (1897–1898), William R. Day (1898–1901)",
          secretaryOfWar: "Russell A. Alger (1897–1899), Elihu Root (1899–1901)",
          secretaryOfTheNavy: "John Davis Long (1897–1901)",
          secretaryOfTreasury: "Charles Foster (1897–1901)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/william_mckinley.jpg"
      },
      {
        id: 23,
        name: "Grover Cleveland (First Term)",
        party: "Democratic",
        term: "1885–1889",
        previousPositions: [
          "Governor of New York (1883–1885)",
          "Mayor of Buffalo (1882–1883)",
          "Sheriff of Erie County (1870–1872)"
        ],
        advisors: {
          secretaryOfState: "Thomas F. Bayard (1885–1889)",
          secretaryOfWar: "Robert Todd Lincoln (1885–1889)",
          secretaryOfTheNavy: "William C. Whitney (1885–1889)",
          secretaryOfTreasury: "Daniel Manning (1885–1889)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/grover_cleveland.jpg"
      },
      {
        id: 24,
        name: "Benjamin Harrison",
        party: "Republican",
        term: "1889–1893",
        previousPositions: [
          "U.S. Senator from Indiana (1881–1887)",
          "Minister to France (1885–1889)",
          "Attorney General of Indiana (1872–1876)"
        ],
        advisors: {
          secretaryOfState: "James G. Blaine (1889–1892), Walter Q. Gresham (1892–1893)",
          secretaryOfWar: "James R. Schlesinger (1889–1893)",
          secretaryOfTheNavy: "Benjamin F. Tracy (1889–1893)",
          secretaryOfTreasury: "Nicholas F. Brady (1888–1893)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/benjamin_harrison.jpg"
      },
      {
        id: 25,
        name: "Grover Cleveland (Second Term)",
        party: "Democratic",
        term: "1893–1897",
        previousPositions: [
          "President of the United States (1885–1889)",
          "Governor of New York (1883–1885)",
          "Mayor of Buffalo (1882–1883)"
        ],
        advisors: {
          secretaryOfState: "Richard Olney (1893–1897)",
          secretaryOfWar: "Daniel Russell (1893–1897)",
          secretaryOfTheNavy: "William B. McKinley (1893–1897)",
          secretaryOfTreasury: "Charles Foster (1893–1897)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/grover_cleveland.jpg"
      },
      {
        id: 26,
        name: "Chester A. Arthur",
        party: "Republican",
        term: "1881–1885",
        previousPositions: [
          "Vice President of the United States (1881)",
          "Collector of the Port of New York (1871–1880)",
          "New York State Assemblyman (1856)"
        ],
        advisors: {
          secretaryOfState: "James G. Blaine (1881)",
          secretaryOfWar: "Robert Todd Lincoln (1881)",
          secretaryOfTheNavy: "William H. Hunt (1881–1885)",
          secretaryOfTreasury: "William Windom (1881–1884), Hugh McCulloch (1884–1885)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/chester_a_arthur.jpg"
      },
      {
        id: 27,
        name: "James Garfield",
        party: "Republican",
        term: "March–September 1881",
        previousPositions: [
          "U.S. Representative from Ohio (1863–1880)",
          "Civil War General",
          "Minister to China (1877–1881)"
        ],
        advisors: {
          secretaryOfState: "James G. Blaine (1881)",
          secretaryOfWar: "Robert Todd Lincoln (1881)",
          secretaryOfTheNavy: "William H. Hunt (1881)",
          secretaryOfTreasury: "Hugh McCulloch (1881)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/james_garfield.jpg"
      },
      {
        id: 28,
        name: "Rutherford B. Hayes",
        party: "Republican",
        term: "1877–1881",
        previousPositions: [
          "Governor of Ohio (1868–1872, 1876–1877)",
          "U.S. Representative from Ohio (1865–1877)",
          "Civil War Major General"
        ],
        advisors: {
          secretaryOfState: "William M. Evarts (1877–1881)",
          secretaryOfWar: "William W. Belknap (1877–1881)",
          secretaryOfTheNavy: "William B. Allison (1877–1879), William B. Gray (1879–1881)",
          secretaryOfTreasury: "John Sherman (1877–1881)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/rutherford_b_hayes.jpg"
      },
      {
        id: 29,
        name: "Ulysses S. Grant",
        party: "Republican",
        term: "1869–1877",
        previousPositions: [
          "Commanding General of the United States Army (1864–1869)",
          "Civil War General",
          "U.S. Minister to Mexico (1857–1861)"
        ],
        advisors: {
          secretaryOfState: "Hamilton Fish (1869–1877)",
          secretaryOfWar: "William W. Belknap (1869–1876), George H. Brinkerhoff (1876–1877)",
          secretaryOfTheNavy: "Adolph E. Borie (1869–1877)",
          secretaryOfTreasury: "Hugh McCulloch (1869–1873), Benjamin H. Bristow (1874–1876), William A. Richardson (1876–1877)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/ulysses_s_grant.jpg"
      },
      {
        id: 30,
        name: "Andrew Johnson",
        party: "National Union (Democratic)",
        term: "1865–1869",
        previousPositions: [
          "Vice President of the United States (1865)",
          "Governor of Tennessee (1853–1857)",
          "U.S. Senator from Tennessee (1857–1862)",
          "Military Governor of Tennessee (1862–1865)"
        ],
        advisors: {
          secretaryOfState: "William H. Seward (1865–1869)",
          secretaryOfWar: "Edwin M. Stanton (1865), John M. Palmer (1865–1869)",
          secretaryOfTheNavy: "Gideon Welles (1865–1869)",
          secretaryOfTreasury: "Hugh McCulloch (1865–1869)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/andrew_johnson.jpg"
      },
      {
        id: 31,
        name: "Abraham Lincoln",
        party: "Republican",
        term: "1861–1865",
        previousPositions: [
          "U.S. Representative from Illinois (1847–1849)",
          "Lawyer",
          "Illinois State Legislator"
        ],
        advisors: {
          secretaryOfState: "William H. Seward (1861–1865)",
          secretaryOfWar: "Simon Cameron (1861–1862), Edwin M. Stanton (1862–1865)",
          secretaryOfTheNavy: "Gideon Welles (1861–1869)",
          secretaryOfTreasury: "Salmon P. Chase (1861–1864), William P. Fessenden (1864–1865)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/abraham_lincoln.jpg"
      },
      {
        id: 32,
        name: "James Buchanan",
        party: "Democratic",
        term: "1857–1861",
        previousPositions: [
          "U.S. Minister to the United Kingdom (1853–1856)",
          "U.S. Minister to Russia (1853)",
          "U.S. Secretary of State (1853)",
          "U.S. Senator from Pennsylvania (1843–1845)"
        ],
        advisors: {
          secretaryOfState: "Lewis Cass (1857–1860), Jeremiah S. Black (1860–1861)",
          secretaryOfWar: "John B. Floyd (1857–1861)",
          secretaryOfTheNavy: "Gideon Welles (1857–1861)",
          secretaryOfTreasury: "Howell Cobb (1857–1860), Philip Nolan (1860–1861)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/james_buchanan.jpg"
      },
      {
        id: 33,
        name: "Franklin Pierce",
        party: "Democratic",
        term: "1853–1857",
        previousPositions: [
          "U.S. Senator from New Hampshire (1837–1842)",
          "U.S. Attorney General (1850–1852)",
          "Governor of New Hampshire (1831–1833)"
        ],
        advisors: {
          secretaryOfState: "William L. Marcy (1853–1857)",
          secretaryOfWar: "Jefferson Davis (1853–1857)",
          secretaryOfTheNavy: "Gideon Welles (1853–1857)",
          secretaryOfTreasury: "James Guthrie (1853–1857)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/franklin_pierce.jpg"
      },
      {
        id: 34,
        name: "Millard Fillmore",
        party: "Whig",
        term: "1850–1853",
        previousPositions: [
          "Vice President of the United States (1849–1850)",
          "U.S. Representative from New York (1843–1849)",
          "Comptroller of New York (1836–1841)"
        ],
        advisors: {
          secretaryOfState: "Daniel Webster (1850–1852), Edward Everett (1852–1853)",
          secretaryOfWar: "William S. Fulton (1850–1851), James McClellan (1851–1853)",
          secretaryOfTheNavy: "Nathaniel P. Banks (1850–1852), John Y. Mason (1852–1853)",
          secretaryOfTreasury: "Howell Cobb (1850–1851), James Guthrie (1851–1853)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/millard_fillmore.jpg"
      },
      {
        id: 35,
        name: "James Buchanan",
        party: "Democratic",
        term: "1857–1861",
        previousPositions: [
          "U.S. Minister to the United Kingdom (1853–1856)",
          "U.S. Minister to Russia (1853)",
          "U.S. Secretary of State (1853)",
          "U.S. Senator from Pennsylvania (1843–1845)"
        ],
        advisors: {
          secretaryOfState: "Lewis Cass (1857–1860), Jeremiah S. Black (1860–1861)",
          secretaryOfWar: "John B. Floyd (1857–1861)",
          secretaryOfTheNavy: "Gideon Welles (1857–1861)",
          secretaryOfTreasury: "Howell Cobb (1857–1860), Philip Nolan (1860–1861)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/james_buchanan.jpg"
      },
      {
        id: 36,
        name: "Franklin Pierce",
        party: "Democratic",
        term: "1853–1857",
        previousPositions: [
          "U.S. Senator from New Hampshire (1837–1842)",
          "U.S. Attorney General (1850–1852)",
          "Governor of New Hampshire (1831–1833)"
        ],
        advisors: {
          secretaryOfState: "William L. Marcy (1853–1857)",
          secretaryOfWar: "Jefferson Davis (1853–1857)",
          secretaryOfTheNavy: "Gideon Welles (1853–1857)",
          secretaryOfTreasury: "James Guthrie (1853–1857)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/franklin_pierce.jpg"
      },
      {
        id: 37,
        name: "James Buchanan",
        party: "Democratic",
        term: "1857–1861",
        previousPositions: [
          "U.S. Minister to the United Kingdom (1853–1856)",
          "U.S. Minister to Russia (1853)",
          "U.S. Secretary of State (1853)",
          "U.S. Senator from Pennsylvania (1843–1845)"
        ],
        advisors: {
          secretaryOfState: "Lewis Cass (1857–1860), Jeremiah S. Black (1860–1861)",
          secretaryOfWar: "John B. Floyd (1857–1861)",
          secretaryOfTheNavy: "Gideon Welles (1857–1861)",
          secretaryOfTreasury: "Howell Cobb (1857–1860), Philip Nolan (1860–1861)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/james_buchanan.jpg"
      },
      {
        id: 38,
        name: "Zachary Taylor",
        party: "Whig",
        term: "1849–1850",
        previousPositions: [
          "U.S. Army General",
          "Whig Party Leader",
          "Commander of the Department of the Lakes"
        ],
        advisors: {
          secretaryOfState: "William L. Marcy (1849–1850)",
          secretaryOfWar: "William S. Fulton (1849–1850)",
          secretaryOfTheNavy: "Wharton T. Anderson (1849–1850)",
          secretaryOfTreasury: "Thomas Ewing (1849–1850)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/zachary_taylor.jpg"
      },
      {
        id: 39,
        name: "Millard Fillmore",
        party: "Whig",
        term: "1850–1853",
        previousPositions: [
          "Vice President of the United States (1849–1850)",
          "U.S. Representative from New York (1843–1849)",
          "Comptroller of New York (1836–1841)"
        ],
        advisors: {
          secretaryOfState: "Daniel Webster (1850–1852), Edward Everett (1852–1853)",
          secretaryOfWar: "William S. Fulton (1850–1851), James McClellan (1851–1853)",
          secretaryOfTheNavy: "Nathaniel P. Banks (1850–1852), John Y. Mason (1852–1853)",
          secretaryOfTreasury: "Howell Cobb (1850–1851), James Guthrie (1851–1853)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/millard_fillmore.jpg"
      },
      {
        id: 40,
        name: "James K. Polk",
        party: "Democratic",
        term: "1845–1849",
        previousPositions: [
          "Governor of Tennessee (1839–1841)",
          "U.S. House of Representatives from Tennessee (1835–1839)",
          "Speaker of the U.S. House of Representatives (1835–1839)"
        ],
        advisors: {
          secretaryOfState: "James Buchanan (1845–1849)",
          secretaryOfWar: "William L. Marcy (1845–1849)",
          secretaryOfTheNavy: "George Bancroft (1845–1849)",
          secretaryOfTreasury: "Thomas Ewing (1845–1849)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/james_k_polk.jpg"
      },
      {
        id: 41,
        name: "Zachary Taylor",
        party: "Whig",
        term: "1849–1850",
        previousPositions: [
          "U.S. Army General",
          "Whig Party Leader",
          "Commander of the Department of the Lakes"
        ],
        advisors: {
          secretaryOfState: "William L. Marcy (1849–1850)",
          secretaryOfWar: "William S. Fulton (1849–1850)",
          secretaryOfTheNavy: "Wharton T. Anderson (1849–1850)",
          secretaryOfTreasury: "Thomas Ewing (1849–1850)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/zachary_taylor.jpg"
      },
      {
        id: 42,
        name: "Franklin Pierce",
        party: "Democratic",
        term: "1853–1857",
        previousPositions: [
          "U.S. Senator from New Hampshire (1837–1842)",
          "U.S. Attorney General (1850–1852)",
          "Governor of New Hampshire (1831–1833)"
        ],
        advisors: {
          secretaryOfState: "William L. Marcy (1853–1857)",
          secretaryOfWar: "Jefferson Davis (1853–1857)",
          secretaryOfTheNavy: "Gideon Welles (1853–1857)",
          secretaryOfTreasury: "James Guthrie (1853–1857)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/franklin_pierce.jpg"
      },
      {
        id: 43,
        name: "James Buchanan",
        party: "Democratic",
        term: "1857–1861",
        previousPositions: [
          "U.S. Minister to the United Kingdom (1853–1856)",
          "U.S. Minister to Russia (1853)",
          "U.S. Secretary of State (1853)",
          "U.S. Senator from Pennsylvania (1843–1845)"
        ],
        advisors: {
          secretaryOfState: "Lewis Cass (1857–1860), Jeremiah S. Black (1860–1861)",
          secretaryOfWar: "John B. Floyd (1857–1861)",
          secretaryOfTheNavy: "Gideon Welles (1857–1861)",
          secretaryOfTreasury: "Howell Cobb (1857–1860), Philip Nolan (1860–1861)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/james_buchanan.jpg"
      },
      {
        id: 44,
        name: "Andrew Johnson",
        party: "National Union (Democratic)",
        term: "1865–1869",
        previousPositions: [
          "Vice President of the United States (1865)",
          "Governor of Tennessee (1853–1857)",
          "U.S. Senator from Tennessee (1857–1862)",
          "Military Governor of Tennessee (1862–1865)"
        ],
        advisors: {
          secretaryOfState: "William H. Seward (1865–1869)",
          secretaryOfWar: "Edwin M. Stanton (1865), John M. Palmer (1865–1869)",
          secretaryOfTheNavy: "Gideon Welles (1865–1869)",
          secretaryOfTreasury: "Hugh McCulloch (1865–1869)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/andrew_johnson.jpg"
      },
      {
        id: 45,
        name: "Ulysses S. Grant",
        party: "Republican",
        term: "1869–1877",
        previousPositions: [
          "Commanding General of the United States Army (1864–1869)",
          "Civil War General",
          "U.S. Minister to Mexico (1857–1861)"
        ],
        advisors: {
          secretaryOfState: "Hamilton Fish (1869–1877)",
          secretaryOfWar: "William W. Belknap (1869–1876), George H. Brinkerhoff (1876–1877)",
          secretaryOfTheNavy: "Adolph E. Borie (1869–1877)",
          secretaryOfTreasury: "Hugh McCulloch (1869–1873), Benjamin H. Bristow (1874–1876), William A. Richardson (1876–1877)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/ulysses_s_grant.jpg"
      },
      {
        id: 46,
        name: "George Washington",
        party: "No Party (Independent)",
        term: "1789–1797",
        previousPositions: [
          "Commander-in-Chief of the Continental Army (1775–1783)",
          "President of the Continental Congress (1774–1775)",
          "Surveyor of Culpeper County, Virginia (1753–1758)"
        ],
        advisors: {
          secretaryOfState: "Thomas Jefferson (1789–1790), Edmund Randolph (1790–1794)",
          secretaryOfWar: "Henry Knox (1789–1794)",
          secretaryOfTheNavy: "Samuel Nicholas (1789–1797)",
          secretaryOfTreasury: "Alexander Hamilton (1789–1795), Oliver Wolcott Jr. (1795–1797)",
          directorOfCIA: "N/A",
          directorOfNationalIntelligence: "N/A"
        },
        image: "/images/george_washington.jpg"
      }
  ];
  
  export default presidents;
  