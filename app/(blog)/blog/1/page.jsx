import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import RecentPost from "@/components/blog/RecentPost";
import blogsData from "@/data/blog";
import Image from "next/image";

export const metadata = {
  title: "Oferta specială: Reduceri exclusive la polițe",
};

const DynamicBlogDetails = ({ params }) => {
  const id = params.id;
  const blog = blogsData.find((item) => item.id == id) || blogsData[0];

  return (
    <>
      <DefaulHeader />

      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-9" data-aos="fade-right">
              <p className="blog-pubish-date">{blog?.date}</p>
              <h2 className="blog-heading-one tx-dark">{blog?.title}</h2>
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <div className="blog-details-one mt-80 lg-mt-60">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <article className="blog-details-content">
                    {blog.imageSrc && (
                      <Image
                        width={816}
                        height={597}
                        layout="responsive"
                        src={blog.imageSrc}
                        alt={blog.title}
                        className="lazy-img image-meta w-100"
                      />
                    )}

                    <h2>Oferta specială: Reduceri exclusive la polițe</h2>

                    <p>
                      Asigurările sunt o componentă esențială a planificării financiare inteligente, oferindu-ți liniștea că tu, familia și bunurile tale sunteți în siguranță în fața neprevăzutului. Tocmai pentru a face aceste beneficii mai accesibile, oferim acum reduceri exclusive la diverse polițe de asigurare, care îți permit să economisești semnificativ și să te bucuri de protecție completă.
                    </p>

                    <h2>Economisește inteligent cu reducerile noastre exclusive</h2>
                    <p>
                      Fie că e vorba despre asigurarea locuinței, a autoturismului, de sănătate sau de viață, ai oportunitatea să beneficiezi de tarife speciale care îți reduc substanțial costurile, fără să faci compromisuri la nivelul calității serviciilor. Profită acum de oferta noastră pentru a-ți optimiza bugetul și a-ți asigura o acoperire optimă a riscurilor tale personale.
                    </p>

                    <h2>Asigurare auto – Mai multă protecție, costuri reduse</h2>
                    <p>
                      Reducerea exclusivă aplicată polițelor de asigurare auto este o ocazie excelentă de a beneficia de o acoperire extinsă, la un preț avantajos. Indiferent că alegi o asigurare obligatorie RCA sau o poliță Casco, ai garanția unor servicii de calitate superioară, cu economii semnificative. Această ofertă îți permite să alegi protecție extinsă împotriva furtului, avariilor și a altor riscuri comune, la cele mai bune tarife.
                    </p>

                    <h2>Protecție pentru locuința ta la tarife speciale</h2>
                    <p>
                      Acum ai posibilitatea să-ți protejezi căminul cu polițe avantajoase, beneficiind de reduceri exclusive care fac protecția mai accesibilă ca oricând. Fie că vorbim de incendii, inundații, cutremure sau furturi, oferta specială îți oferă acoperire extinsă, permițându-ți să dormi liniștit știind că locuința ta este bine asigurată.
                    </p>

                    <h2>Asigurări de sănătate – Prețuri speciale, servicii complete</h2>
                    <p>
                      Profită de reducerile noastre exclusive pentru asigurările de sănătate și bucură-te de acces rapid și eficient la servicii medicale de calitate, fără să plătești costuri ridicate. Această ofertă specială îți permite să alegi dintr-o gamă variată de polițe, adaptate nevoilor tale, care acoperă consultații medicale, analize, tratamente, dar și intervenții chirurgicale.
                    </p>

                    <h2>Asigurarea de viață – Mai accesibilă ca oricând</h2>
                    <p>
                      Asigurarea de viață este o investiție esențială în liniștea ta și a familiei tale. Acum poți beneficia de reduceri exclusive la polițele noastre de viață, având astfel siguranța că cei dragi vor avea sprijinul financiar necesar în caz de evenimente neprevăzute. Alege o protecție solidă și accesibilă, adaptată situației tale personale și financiare.
                    </p>

                    <h2>Fără limită de timp, doar oportunități constante</h2>
                    <p>
                      Spre deosebire de alte oferte, reducerile noastre exclusive nu au o dată limită de expirare. Astfel, beneficiezi constant de aceste avantaje, putând să-ți faci planurile fără presiunea timpului. Indiferent când alegi să accesezi aceste reduceri, beneficiezi de aceleași condiții speciale și de sprijinul echipei noastre dedicate.
                    </p>

                    <h2>Accesează oferta și consultă un specialist</h2>
                    <p>
                      Nu rata ocazia de a beneficia de reduceri exclusive la polițe și contactează-ne chiar acum pentru a afla care sunt cele mai bune opțiuni disponibile pentru tine. Consultanții noștri sunt pregătiți să îți ofere toate informațiile necesare, astfel încât să poți lua cea mai bună decizie în materie de protecție financiară și personală.
                    </p>
                  </article>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="blog-sidebar md-mt-70">
                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Alte articole</h4>
                    <RecentPost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default DynamicBlogDetails;
