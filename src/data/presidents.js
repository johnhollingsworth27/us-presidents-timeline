const presidents = [
  {
    id: 1,
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
      secretaryOfTreasury: "Alexander Hamilton (1789–1795), Oliver Wolcott Jr. (1795–1797)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/george_washington.jpg"
  },
  {
    id: 2,
    name: "John Adams",
    party: "Federalist",
    term: "1797–1801",
    previousPositions: [
      "Vice President of the United States (1789–1797)",
      "Minister to the Netherlands (1782–1788)",
      "Commissioner to France (1778–1782)"
    ],
    advisors: {
      secretaryOfState: "Timothy Pickering (1797–1800), John Marshall (1800–1801)",
      secretaryOfWar: "James McHenry (1797–1800), Samuel Dexter (1800–1801)",
      secretaryOfTreasury: "Oliver Wolcott Jr. (1797–1800), Samuel Dexter (1800–1801)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/john_adams.jpg"
  },
  {
    id: 3,
    name: "Thomas Jefferson",
    party: "Democratic-Republican",
    term: "1801–1809",
    previousPositions: [
      "Vice President of the United States (1797–1801)",
      "Secretary of State (1789–1797)",
      "Minister to France (1785–1789)"
    ],
    advisors: {
      secretaryOfState: "James Madison (1801–1809)",
      secretaryOfWar: "Henry Dearborn (1801–1809)",
      secretaryOfTreasury: "Samuel Dexter (1801), Albert Gallatin (1801–1809)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/thomas_jefferson.jpg"
  },
  {
    id: 4,
    name: "James Madison",
    party: "Democratic-Republican",
    term: "1809–1817",
    previousPositions: [
      "Secretary of State (1801–1809)",
      "Member of the U.S. House of Representatives (1789–1797)"
    ],
    advisors: {
      secretaryOfState: "Robert Smith (1809–1811), James Monroe (1811–1817)",
      secretaryOfWar: "William Eustis (1809–1813), John Armstrong Jr. (1813–1814), James Monroe (1814–1815), William H. Crawford (1815–1817)",
      secretaryOfTreasury: "Albert Gallatin (1809–1813), George W. Campbell (1814–1817)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/james_madison.jpg"
  },
  {
    id: 5,
    name: "James Monroe",
    party: "Democratic-Republican",
    term: "1817–1825",
    previousPositions: [
      "Secretary of State (1811–1817)",
      "Secretary of War (1814–1815)",
      "Governor of Virginia (1799–1802)"
    ],
    advisors: {
      secretaryOfState: "John Quincy Adams (1817–1825)",
      secretaryOfWar: "John C. Calhoun (1817–1825)",
      secretaryOfTreasury: "William H. Crawford (1817–1825)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/james_monroe.jpg"
  },
  {
    id: 6,
    name: "John Quincy Adams",
    party: "Democratic-Republican",
    term: "1825–1829",
    previousPositions: [
      "Secretary of State (1817–1825)",
      "U.S. Minister to Russia (1809–1814)",
      "U.S. Senator from Massachusetts (1803–1808)"
    ],
    advisors: {
      secretaryOfState: "Henry Clay (1825–1829)",
      secretaryOfWar: "James Barbour (1825–1828), Peter B. Porter (1828–1829)",
      secretaryOfTreasury: "Richard Rush (1825–1829)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/john_quincy_adams.jpg"
  },
  {
    id: 7,
    name: "Andrew Jackson",
    party: "Democratic",
    term: "1829–1837",
    previousPositions: [
      "U.S. Senator from Tennessee (1823–1825)",
      "Governor of Florida (1821)",
      "General in the U.S. Army"
    ],
    advisors: {
      secretaryOfState: "Martin Van Buren (1829–1831), Edward Livingston (1831–1833), Louis McLane (1833–1834), John Forsyth (1834–1837)",
      secretaryOfWar: "John H. Eaton (1829–1831), Lewis Cass (1831–1836)",
      secretaryOfTreasury: "Samuel D. Ingham (1829–1833), Roger B. Taney (1833–1834), Levi Woodbury (1834–1837)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/andrew_jackson.jpg"
  },
  {
    id: 8,
    name: "Martin Van Buren",
    party: "Democratic",
    term: "1837–1841",
    previousPositions: [
      "Vice President of the United States (1833–1837)",
      "Secretary of State (1829–1831)",
      "Governor of New York (1829)"
    ],
    advisors: {
      secretaryOfState: "John Forsyth (1837–1841)",
      secretaryOfWar: "Joel Roberts Poinsett (1837–1841)",
      secretaryOfTreasury: "Levi Woodbury (1837–1841)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/martin_van_buren.jpg"
  },
  {
    id: 9,
    name: "William Henry Harrison",
    party: "Whig",
    term: "1841",
    previousPositions: [
      "Minister to Colombia (1828–1829)",
      "U.S. Senator from Ohio (1825–1828)",
      "Governor of the Indiana Territory (1801–1813)"
    ],
    advisors: {
      secretaryOfState: "Daniel Webster (1841)",
      secretaryOfWar: "John Bell (1841)",
      secretaryOfTreasury: "Thomas Ewing (1841)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/william_henry_harrison.jpg"
  },
  {
    id: 10,
    name: "John Tyler",
    party: "Whig (later unaffiliated)",
    term: "1841–1845",
    previousPositions: [
      "Vice President of the United States (1841)",
      "U.S. Senator from Virginia (1827–1836)",
      "Governor of Virginia (1825–1827)"
    ],
    advisors: {
      secretaryOfState: "Daniel Webster (1841–1843), Abel P. Upshur (1843–1844), John C. Calhoun (1844–1845)",
      secretaryOfWar: "John Bell (1841), John C. Spencer (1841–1843), James M. Porter (1843–1845)",
      secretaryOfTreasury: "Thomas Ewing (1841), Walter Forward (1841–1843), John C. Spencer (1843–1844), George M. Bibb (1844–1845)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/john_tyler.jpg"
  },
  {
    id: 11,
    name: "James K. Polk",
    party: "Democratic",
    term: "1845–1849",
    previousPositions: [
      "Governor of Tennessee (1839–1841)",
      "Speaker of the U.S. House of Representatives (1835–1839)",
      "Member of the U.S. House of Representatives from Tennessee (1825–1839)"
    ],
    advisors: {
      secretaryOfState: "James Buchanan (1845–1849)",
      secretaryOfWar: "William L. Marcy (1845–1849)",
      secretaryOfTreasury: "Robert J. Walker (1845–1849)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/james_k_polk.jpg"
  },
  {
    id: 12,
    name: "Zachary Taylor",
    party: "Whig",
    term: "1849–1850",
    previousPositions: [
      "Major General, U.S. Army",
      "Commander of U.S. forces in the Mexican-American War"
    ],
    advisors: {
      secretaryOfState: "John M. Clayton (1849–1850)",
      secretaryOfWar: "George W. Crawford (1849–1850)",
      secretaryOfTreasury: "William M. Meredith (1849–1850)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/zachary_taylor.jpg"
  },
  {
    id: 13,
    name: "Millard Fillmore",
    party: "Whig",
    term: "1850–1853",
    previousPositions: [
      "Vice President of the United States (1849–1850)",
      "Comptroller of New York (1848–1849)",
      "U.S. Representative from New York (1837–1843)"
    ],
    advisors: {
      secretaryOfState: "Daniel Webster (1850–1852), Edward Everett (1852–1853)",
      secretaryOfWar: "Charles M. Conrad (1850–1853)",
      secretaryOfTreasury: "Thomas Corwin (1850–1853)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/millard_fillmore.jpg"
  },
  {
    id: 14,
    name: "Franklin Pierce",
    party: "Democratic",
    term: "1853–1857",
    previousPositions: [
      "Brigadier General, U.S. Army",
      "U.S. Senator from New Hampshire (1837–1842)",
      "U.S. Representative from New Hampshire (1833–1837)"
    ],
    advisors: {
      secretaryOfState: "William L. Marcy (1853–1857)",
      secretaryOfWar: "Jefferson Davis (1853–1857)",
      secretaryOfTreasury: "James Guthrie (1853–1857)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/franklin_pierce.jpg"
  },
  {
    id: 15,
    name: "James Buchanan",
    party: "Democratic",
    term: "1857–1861",
    previousPositions: [
      "Secretary of State (1845–1849)",
      "Minister to the United Kingdom (1853–1856)",
      "U.S. Senator from Pennsylvania (1834–1845)"
    ],
    advisors: {
      secretaryOfState: "Lewis Cass (1857–1860), Jeremiah S. Black (1860–1861)",
      secretaryOfWar: "John B. Floyd (1857–1861)",
      secretaryOfTreasury: "Howell Cobb (1857–1860), Philip F. Thomas (1860–1861)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/james_buchanan.jpg"
  },
  {
    id: 16,
    name: "Abraham Lincoln",
    party: "Republican",
    term: "1861–1865",
    previousPositions: [
      "U.S. Representative from Illinois (1847–1849)",
      "Lawyer",
      "Illinois State Legislator (1834–1842)"
    ],
    advisors: {
      secretaryOfState: "William H. Seward (1861–1865)",
      secretaryOfWar: "Simon Cameron (1861–1862), Edwin M. Stanton (1862–1865)",
      secretaryOfTreasury: "Salmon P. Chase (1861–1864), William P. Fessenden (1864–1865), Hugh McCulloch (1865)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/abraham_lincoln.jpg"
  },
  {
    id: 17,
    name: "Andrew Johnson",
    party: "National Union (Democratic)",
    term: "1865–1869",
    previousPositions: [
      "Vice President of the United States (1865)",
      "Military Governor of Tennessee (1862–1865)",
      "U.S. Senator from Tennessee (1857–1862)"
    ],
    advisors: {
      secretaryOfState: "William H. Seward (1865–1869)",
      secretaryOfWar: "Edwin M. Stanton (1865–1868), John M. Schofield (1868–1869)",
      secretaryOfTreasury: "Hugh McCulloch (1865–1869)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/andrew_johnson.jpg"
  },
  {
    id: 18,
    name: "Ulysses S. Grant",
    party: "Republican",
    term: "1869–1877",
    previousPositions: [
      "Commanding General of the U.S. Army (1864–1869)",
      "U.S. Secretary of War (1867–1868)",
      "Civil War General"
    ],
    advisors: {
      secretaryOfState: "Elihu B. Washburne (1869), Hamilton Fish (1869–1877)",
      secretaryOfWar: "John A. Rawlins (1869), William W. Belknap (1869–1876), Alphonso Taft (1876), James D. Cameron (1876–1877)",
      secretaryOfTreasury: "George S. Boutwell (1869–1873), William A. Richardson (1873–1874), Benjamin Bristow (1874–1876), Lot M. Morrill (1876–1877)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/ulysses_s_grant.jpg"
  },
  {
    id: 19,
    name: "Rutherford B. Hayes",
    party: "Republican",
    term: "1877–1881",
    previousPositions: [
      "Governor of Ohio (1868–1872, 1876–1877)",
      "U.S. Representative from Ohio (1865–1867)",
      "Civil War General"
    ],
    advisors: {
      secretaryOfState: "William M. Evarts (1877–1881)",
      secretaryOfWar: "George W. McCrary (1877–1879), Alexander Ramsey (1879–1881)",
      secretaryOfTreasury: "John Sherman (1877–1881)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/rutherford_b_hayes.jpg"
  },
  {
    id: 20,
    name: "James A. Garfield",
    party: "Republican",
    term: "1881",
    previousPositions: [
      "U.S. Representative from Ohio (1863–1880)",
      "Brigadier General in the Union Army"
    ],
    advisors: {
      secretaryOfState: "James G. Blaine (1881)",
      secretaryOfWar: "Robert Todd Lincoln (1881)",
      secretaryOfTreasury: "William Windom (1881)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/james_garfield.jpg"
  },
  {
    id: 21,
    name: "Chester A. Arthur",
    party: "Republican",
    term: "1881–1885",
    previousPositions: [
      "Vice President of the United States (1881)",
      "Collector of the Port of New York (1871–1878)",
      "Quartermaster General of the New York Militia"
    ],
    advisors: {
      secretaryOfState: "James G. Blaine (1881), Frederick T. Frelinghuysen (1881–1885)",
      secretaryOfWar: "Robert Todd Lincoln (1881–1885)",
      secretaryOfTreasury: "Charles J. Folger (1881–1884), Walter Q. Gresham (1884), Hugh McCulloch (1884–1885)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/chester_a_arthur.jpg"
  },
  {
    id: 22,
    name: "Grover Cleveland (First Term)",
    party: "Democratic",
    term: "1885–1889",
    previousPositions: [
      "Governor of New York (1883–1885)",
      "Mayor of Buffalo (1882)",
      "Sheriff of Erie County (1871–1873)"
    ],
    advisors: {
      secretaryOfState: "Thomas F. Bayard (1885–1889)",
      secretaryOfWar: "William C. Endicott (1885–1889)",
      secretaryOfTreasury: "Daniel Manning (1885–1887), Charles S. Fairchild (1887–1889)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/grover_cleveland.jpg"
  },
  {
    id: 23,
    name: "Benjamin Harrison",
    party: "Republican",
    term: "1889–1893",
    previousPositions: [
      "U.S. Senator from Indiana (1881–1887)",
      "Brigadier General in the Union Army"
    ],
    advisors: {
      secretaryOfState: "James G. Blaine (1889–1892), John W. Foster (1892–1893)",
      secretaryOfWar: "Redfield Proctor (1889–1891), Stephen B. Elkins (1891–1893)",
      secretaryOfTreasury: "William Windom (1889–1891), Charles Foster (1891–1893)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/benjamin_harrison.jpg"
  },
  {
    id: 24,
    name: "Grover Cleveland (Second Term)",
    party: "Democratic",
    term: "1893–1897",
    previousPositions: [
      "President of the United States (1885–1889)",
      "Governor of New York (1883–1885)",
      "Mayor of Buffalo (1882)"
    ],
    advisors: {
      secretaryOfState: "Walter Q. Gresham (1893–1895), Richard Olney (1895–1897)",
      secretaryOfWar: "Daniel S. Lamont (1893–1897)",
      secretaryOfTreasury: "John G. Carlisle (1893–1897)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/grover_cleveland.jpg"
  },
  {
    id: 25,
    name: "William McKinley",
    party: "Republican",
    term: "1897–1901",
    previousPositions: [
      "Governor of Ohio (1892–1896)",
      "U.S. Representative from Ohio (1877–1891)",
      "Colonel in the Union Army"
    ],
    advisors: {
      secretaryOfState: "John Sherman (1897–1898), William R. Day (1898), John Hay (1898–1901)",
      secretaryOfWar: "Russell A. Alger (1897–1899), Elihu Root (1899–1901)",
      secretaryOfTreasury: "Lyman J. Gage (1897–1901)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/william_mckinley.jpg"
  },
  {
    id: 26,
    name: "Theodore Roosevelt",
    party: "Republican",
    term: "1901–1909",
    previousPositions: [
      "Vice President of the United States (1901)",
      "Governor of New York (1899–1900)",
      "Assistant Secretary of the Navy (1897–1898)"
    ],
    advisors: {
      secretaryOfState: "John Hay (1901–1905), Elihu Root (1905–1909)",
      secretaryOfWar: "Elihu Root (1901–1904), William H. Taft (1904–1908), Luke E. Wright (1908–1909)",
      secretaryOfTreasury: "Lyman J. Gage (1901–1902), Leslie M. Shaw (1902–1907), George B. Cortelyou (1907–1909)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/theodore_roosevelt.jpg"
  },
  {
    id: 27,
    name: "William Howard Taft",
    party: "Republican",
    term: "1909–1913",
    previousPositions: [
      "Secretary of War (1904–1908)",
      "Governor-General of the Philippines (1901–1903)",
      "Chief Justice of the United States (1921–1930)"
    ],
    advisors: {
      secretaryOfState: "Philander C. Knox (1909–1913)",
      secretaryOfWar: "Jacob M. Dickinson (1909–1911), Henry L. Stimson (1911–1913)",
      secretaryOfTreasury: "Franklin MacVeagh (1909–1913)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/william_howard_taft.jpg"
  },
  {
    id: 28,
    name: "Woodrow Wilson",
    party: "Democratic",
    term: "1913–1921",
    previousPositions: [
      "Governor of New Jersey (1911–1913)",
      "President of Princeton University (1902–1910)"
    ],
    advisors: {
      secretaryOfState: "William Jennings Bryan (1913–1915), Robert Lansing (1915–1920), Bainbridge Colby (1920–1921)",
      secretaryOfWar: "Lindley M. Garrison (1913–1916), Newton D. Baker (1916–1921)",
      secretaryOfTreasury: "William Gibbs McAdoo (1913–1918), Carter Glass (1918–1920), David F. Houston (1920–1921)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/woodrow_wilson.jpg"
  },
  {
    id: 29,
    name: "Warren G. Harding",
    party: "Republican",
    term: "1921–1923",
    previousPositions: [
      "U.S. Senator from Ohio (1915–1921)",
      "Lieutenant Governor of Ohio (1904–1906)"
    ],
    advisors: {
      secretaryOfState: "Charles Evans Hughes (1921–1923)",
      secretaryOfWar: "John W. Weeks (1921–1923)",
      secretaryOfTreasury: "Andrew W. Mellon (1921–1923)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/warren_g_harding.jpg"
  },
  {
    id: 30,
    name: "Calvin Coolidge",
    party: "Republican",
    term: "1923–1929",
    previousPositions: [
      "Vice President of the United States (1921–1923)",
      "Governor of Massachusetts (1919–1921)"
    ],
    advisors: {
      secretaryOfState: "Charles Evans Hughes (1921–1925), Frank B. Kellogg (1925–1929)",
      secretaryOfWar: "John W. Weeks (1921–1925), Dwight F. Davis (1925–1929)",
      secretaryOfTreasury: "Andrew W. Mellon (1921–1932)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/calvin_coolidge.jpg"
  },
  {
    id: 31,
    name: "Herbert Hoover",
    party: "Republican",
    term: "1929–1933",
    previousPositions: [
      "Secretary of Commerce (1921–1928)",
      "Director of the U.S. Food Administration (1917–1919)"
    ],
    advisors: {
      secretaryOfState: "Frank B. Kellogg (1929), Henry L. Stimson (1929–1933)",
      secretaryOfWar: "James W. Good (1929), Patrick J. Hurley (1929–1933)",
      secretaryOfTreasury: "Andrew W. Mellon (1929–1932), Ogden L. Mills (1932–1933)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/herbert_hoover.jpg"
  },
  {
    id: 32,
    name: "Franklin D. Roosevelt",
    party: "Democratic",
    term: "1933–1945",
    previousPositions: [
      "Governor of New York (1929–1932)",
      "Assistant Secretary of the Navy (1913–1920)"
    ],
    advisors: {
      secretaryOfState: "Cordell Hull (1933–1944), Edward Stettinius Jr. (1944–1945)",
      secretaryOfWar: "George H. Dern (1933–1936), Harry H. Woodring (1936–1940), Henry L. Stimson (1940–1945)",
      secretaryOfTreasury: "William H. Woodin (1933–1934), Henry Morgenthau Jr. (1934–1945)",
      directorOfCIA: "N/A",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/franklin_d_roosevelt.jpg"
  },
  {
    id: 33,
    name: "Harry S. Truman",
    party: "Democratic",
    term: "1945–1953",
    previousPositions: [
      "Vice President of the United States (1945)",
      "U.S. Senator from Missouri (1935–1945)"
    ],
    advisors: {
      secretaryOfState: "Edward Stettinius Jr. (1945), James F. Byrnes (1945–1947), George Marshall (1947–1949), Dean Acheson (1949–1953)",
      secretaryOfWar: "Henry L. Stimson (1945), Robert P. Patterson (1945–1947)",
      secretaryOfDefense: "James Forrestal (1947–1949), Louis A. Johnson (1949–1950), George C. Marshall (1950–1951), Robert A. Lovett (1951–1953)",
      secretaryOfTreasury: "Fred M. Vinson (1945–1946), John W. Snyder (1946–1953)",
      directorOfCIA: "Roscoe H. Hillenkoetter (1947–1950), Walter Bedell Smith (1950–1953)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/harry_s_truman.jpg"
  },
  {
    id: 34,
    name: "Dwight D. Eisenhower",
    party: "Republican",
    term: "1953–1961",
    previousPositions: [
      "Supreme Commander of the Allied Expeditionary Force in Europe (1943–1945)",
      "President of Columbia University (1948–1953)"
    ],
    advisors: {
      secretaryOfState: "John Foster Dulles (1953–1959), Christian Herter (1959–1961)",
      secretaryOfDefense: "Charles E. Wilson (1953–1957), Neil H. McElroy (1957–1959), Thomas S. Gates Jr. (1959–1961)",
      secretaryOfTreasury: "George M. Humphrey (1953–1957), Robert B. Anderson (1957–1961)",
      directorOfCIA: "Allen Dulles (1953–1961)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/dwight_d_eisenhower.jpg"
  },
  {
    id: 35,
    name: "John F. Kennedy",
    party: "Democratic",
    term: "1961–1963",
    previousPositions: [
      "U.S. Senator from Massachusetts (1953–1960)",
      "U.S. Representative from Massachusetts (1947–1953)"
    ],
    advisors: {
      secretaryOfState: "Dean Rusk (1961–1963)",
      secretaryOfDefense: "Robert McNamara (1961–1963)",
      secretaryOfTreasury: "C. Douglas Dillon (1961–1963)",
      directorOfCIA: "Allen Dulles (1961), John McCone (1961–1963)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/john_f_kennedy.jpg"
  },
  {
    id: 36,
    name: "Lyndon B. Johnson",
    party: "Democratic",
    term: "1963–1969",
    previousPositions: [
      "Vice President of the United States (1961–1963)",
      "U.S. Senator from Texas (1949–1961)"
    ],
    advisors: {
      secretaryOfState: "Dean Rusk (1963–1969)",
      secretaryOfDefense: "Robert McNamara (1963–1968), Clark Clifford (1968–1969)",
      secretaryOfTreasury: "C. Douglas Dillon (1963–1965), Henry H. Fowler (1965–1969)",
      directorOfCIA: "John McCone (1963–1965), William Raborn (1965–1966), Richard Helms (1966–1969)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/lyndon_b_johnson.jpg"
  },
  {
    id: 37,
    name: "Richard Nixon",
    party: "Republican",
    term: "1969–1974",
    previousPositions: [
      "Vice President of the United States (1953–1961)",
      "U.S. Senator from California (1950–1953)"
    ],
    advisors: {
      secretaryOfState: "William Rogers (1969–1973), Henry Kissinger (1973–1974)",
      secretaryOfDefense: "Melvin Laird (1969–1973), Elliot Richardson (1973), James Schlesinger (1973–1974)",
      secretaryOfTreasury: "David M. Kennedy (1969–1971), John Connally (1971–1972), George Shultz (1972–1974)",
      directorOfCIA: "Richard Helms (1969–1973), James Schlesinger (1973), William Colby (1973–1974)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/richard_nixon.jpg"
  },
  {
    id: 38,
    name: "Gerald Ford",
    party: "Republican",
    term: "1974–1977",
    previousPositions: [
      "Vice President of the United States (1973–1974)",
      "U.S. Representative from Michigan (1949–1973)",
      "House Minority Leader (1965–1973)"
    ],
    advisors: {
      secretaryOfState: "Henry Kissinger (1974–1977)",
      secretaryOfDefense: "James R. Schlesinger (1974–1975), Donald Rumsfeld (1975–1977)",
      secretaryOfTreasury: "William E. Simon (1974–1977)",
      directorOfCIA: "William Colby (1974–1976), George H. W. Bush (1976–1977)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/gerald_ford.jpg"
  },
  {
    id: 39,
    name: "Jimmy Carter",
    party: "Democratic",
    term: "1977–1981",
    previousPositions: [
      "Governor of Georgia (1971–1975)",
      "Georgia State Senator (1963–1967)"
    ],
    advisors: {
      secretaryOfState: "Cyrus Vance (1977–1980), Edmund Muskie (1980–1981)",
      secretaryOfDefense: "Harold Brown (1977–1981)",
      secretaryOfTreasury: "W. Michael Blumenthal (1977–1979), G. William Miller (1979–1981)",
      directorOfCIA: "Stansfield Turner (1977–1981)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/jimmy_carter.jpg"
  },
  {
    id: 40,
    name: "Ronald Reagan",
    party: "Republican",
    term: "1981–1989",
    previousPositions: [
      "Governor of California (1967–1975)",
      "President of the Screen Actors Guild (1947–1952)"
    ],
    advisors: {
      secretaryOfState: "Alexander Haig (1981–1982), George Shultz (1982–1989)",
      secretaryOfDefense: "Caspar Weinberger (1981–1987), Frank Carlucci (1987–1989)",
      secretaryOfTreasury: "Donald Regan (1981–1985), James Baker (1985–1988), Nicholas F. Brady (1988–1989)",
      directorOfCIA: "William J. Casey (1981–1987), William H. Webster (1987–1989)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/ronald_reagan.jpg"
  },
  {
    id: 41,
    name: "George H. W. Bush",
    party: "Republican",
    term: "1989–1993",
    previousPositions: [
      "Vice President of the United States (1981–1989)",
      "Director of Central Intelligence (1976–1977)"
    ],
    advisors: {
      secretaryOfState: "James Baker (1989–1992), Lawrence Eagleburger (1992–1993)",
      secretaryOfDefense: "Dick Cheney (1989–1993)",
      secretaryOfTreasury: "Nicholas F. Brady (1989–1993)",
      directorOfCIA: "William H. Webster (1987–1991), Robert Gates (1991–1993)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/george_hw_bush.jpg"
  },
  {
    id: 42,
    name: "Bill Clinton",
    party: "Democratic",
    term: "1993–2001",
    previousPositions: [
      "Governor of Arkansas (1979–1981, 1983–1992)",
      "Attorney General of Arkansas (1977–1979)"
    ],
    advisors: {
      secretaryOfState: "Warren Christopher (1993–1997), Madeleine Albright (1997–2001)",
      secretaryOfDefense: "Les Aspin (1993–1994), William Perry (1994–1997), William Cohen (1997–2001)",
      secretaryOfTreasury: "Lloyd Bentsen (1993–1994), Robert Rubin (1995–1999), Lawrence Summers (1999–2001)",
      directorOfCIA: "R. James Woolsey (1993–1995), John Deutch (1995–1996), George Tenet (1997–2001)",
      directorOfNationalIntelligence: "N/A"
    },
    image: "/images/bill_clinton.jpg"
  },
  {
    id: 43,
    name: "George W. Bush",
    party: "Republican",
    term: "2001–2009",
    previousPositions: [
      "Governor of Texas (1995–2000)"
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
    id: 44,
    name: "Barack Obama",
    party: "Democratic",
    term: "2009–2017",
    previousPositions: [
      "U.S. Senator from Illinois (2005–2008)",
      "Illinois State Senator (1997–2004)"
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
  {
    id: 45,
    name: "Donald Trump",
    party: "Republican",
    term: "2017–2021",
    previousPositions: [
      "Businessman",
      "Television Host (The Apprentice)"
    ],
    advisors: {
      secretaryOfState: "Rex Tillerson (2017–2018), Mike Pompeo (2018–2021)",
      secretaryOfDefense: "James Mattis (2017–2019), Mark Esper (2019–2020), Christopher Miller (2020–2021)",
      secretaryOfTreasury: "Steven Mnuchin",
      directorOfCIA: "Mike Pompeo (2017–2018), Gina Haspel (2018–2021)",
      directorOfNationalIntelligence: "Dan Coats (2017–2019), John Ratcliffe (2020–2021)"
    },
    image: "/images/donald_trump.jpg"
  },
  {
    id: 46,
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
      directorOfCIA: "William J. Burns",
      directorOfNationalIntelligence: "Avril Haines"
    },
    image: "/images/joe_biden.jpg"
  }
];

export default presidents;
