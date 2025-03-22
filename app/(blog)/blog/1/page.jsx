import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import SearchBox from "@/components/blog/SearchBox";
import Category from "@/components/blog/Category";
import RecentPost from "@/components/blog/RecentPost";
import BannerPost from "@/components/blog/BannerPost";
import Tag from "@/components/blog/blog-details/Tag";
import SocialShare from "@/components/blog/blog-details/SocialShare";
import SingleComments from "@/components/blog/blog-details/SingleComments";
import CommentBox from "@/components/blog/blog-details/CommentBox";
import Link from "next/link";

import blogsData from "@/data/blog";
import Image from "next/image";
export const metadata = {
  title:
    "Dynamic Blog Details || Jano - Creative Multipurpose React NextJS Template",
};
const DynamicBlogDetails = ({ params }) => {
  const id = params.id;
  const blog = blogsData.find((item) => item.id == id) || blogsData[0];

  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
			Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-9" data-aos="fade-right">
              <p className="blog-pubish-date">
                {blog?.date}
       
              </p>
              <h2 className="blog-heading-one tx-dark">{blog?.title}</h2>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
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
    Te invităm să profiți de campania noastră limitată prin care oferim reduceri substanțiale 
    la mai multe tipuri de polițe. Fie că este vorba despre mașina ta, locuință sau vacanțele 
    în străinătate, acum ai șansa să economisești și să fii protejat.
  </p>


  <h2>De ce să alegi această ofertă?</h2>
  <ul>
    <li><strong>Prețuri mai mici</strong>: Reduceri semnificative față de tarifele obișnuite.</li>
    <li><strong>Proces rapid și simplu</strong>: Totul se desfășoară 100% online.</li>
    <li><strong>Flexibilitate</strong>: Poți alege oferta cea mai potrivită dintre mai mulți furnizori.</li>
    <li><strong>Consiliere gratuită</strong>: Echipa noastră de consultanți îți stă la dispoziție.</li>
    <li><strong>Siguranță imediată</strong>: Polița se emite și se livrează instant, direct pe email.</li>
  </ul>

 
  <h2>Tipuri de polițe incluse</h2>
  <p>
    Oferta noastră acoperă asigurări <strong>RCA</strong>, <strong>CASCO</strong>, 
    de locuință și de călătorie. Reducerile se aplică indiferent de furnizor, 
    astfel încât poți alege polița care ți se potrivește cel mai bine, la cel mai bun preț.
  </p>

 
  <h2>Pașii pentru a beneficia de reducere</h2>
  <ol>
    <li>Accesează platforma noastră și completează formularul cu datele personale și detaliile despre polița dorită.</li>
    <li>Selectează oferta care ți se potrivește cel mai bine, comparând prețurile și condițiile de la mai mulți asiguratori.</li>
    <li>La final, introdu codul promoțional <strong>REDUCERE30</strong>, iar reducerea va fi aplicată automat, fără alte formalități.</li>
  </ol>

 
  <h2>Beneficiile tale</h2>
  <p>
    Pe lângă prețuri mai mici, îți oferim și un proces rapid, 100% online, consultanță gratuită și suport dedicat.
    Polița ta va fi emisă imediat și livrată pe email, fără deplasări sau timp pierdut.
  </p>


  <h2>Exemple de economii</h2>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Tip poliță</th>
        <th>Preț inițial</th>
        <th>Preț cu reducere</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>RCA</td>
        <td>350 RON</td>
        <td>245 RON (cu REDUCERE30)</td>
      </tr>
      <tr>
        <td>CASCO</td>
        <td>1.200 RON</td>
        <td>840 RON (cu REDUCERE30)</td>
      </tr>
      <tr>
        <td>Locuință</td>
        <td>200 RON</td>
        <td>140 RON (cu REDUCERE30)</td>
      </tr>
      <tr>
        <td>Călătorie</td>
        <td>100 RON</td>
        <td>70 RON (cu REDUCERE30)</td>
      </tr>
    </tbody>
  </table>


  <h2>Grăbește-te!</h2>
  <p>
    Oferta este valabilă până la <strong>31 martie 2025</strong>. După această dată, reducerile 
    nu vor mai fi disponibile. Nu rata ocazia de a obține protecție completă la un preț excepțional!
  </p>


  
  <h2>Întrebări frecvente</h2>
  <dl>
    <dt><strong>1. Pot folosi reducerea și pentru alte tipuri de asigurări?</strong></dt>
    <dd>Momentan, reducerea este valabilă doar pentru asigurările RCA, CASCO, de locuință și de călătorie.</dd>

    <dt><strong>2. Cum primesc polița după ce finalizez comanda?</strong></dt>
    <dd>Polița se emite instant și este trimisă în format electronic pe adresa de email furnizată.</dd>

    <dt><strong>3. Pot solicita ajutor dacă nu mă descurc cu alegerea poliței?</strong></dt>
    <dd>Desigur! Echipa noastră de consultanți îți oferă suport telefonic și online, complet gratuit.</dd>
  </dl>


  <h2>Termeni și condiții</h2>
  <p>
    Pentru a beneficia de reducere, este necesar să introduci corect codul promoțional <strong>REDUCERE30</strong>
    înainte de finalizarea comenzii. Reducerea se aplică exclusiv polițelor achiziționate în perioada 01.03.2025 – 31.03.2025.
    După această dată, discountul nu va mai fi disponibil.
  </p>


  <p><em>Nu rata această oportunitate unică de a te bucura de protecție completă la costuri reduse!</em></p>

                    {/* <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                      <Tag />
                      <SocialShare />
                    </div> */}
                    {/* /.bottom-widget */}
                  </article>
                  {/* /.blog-details-content */}

                  {/* <div className="blog-comment-area">
                    <h3 className="blog-inner-title tx-dark pb-15">
                      2 Comments
                    </h3>
                    <SingleComments />
                  </div> */}
                  {/* /.blog-comment-area */}

                  {/* <div className="blog-comment-form">
                    <h3 className="blog-inner-title tx-dark">
                      Leave A Comment
                    </h3>
                    <p>
                      <Link href="/login" className="text-decoration-underline">
                        Sign
                      </Link>
                      in to post your comment or signup if you dont have any
                      account.
                    </p>
                    <CommentBox />
                  </div> */}
                  {/* /.blog-comment-form */}
                </div>
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  {/* <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox />
                  </div> */}
                  {/* /.blog-sidebar-search */}

                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Categorii</h4>
                    <Category />
                  </div>
                  {/* /.blog-sidebar-category */}

                  {/* <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <RecentPost />
                  </div> */}
                  {/* /.sidebar-recent-news */}

                  {/* <BannerPost /> */}
                  {/* /.sidebar-banner-add */}
                </div>
                {/* /.blog-sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default DynamicBlogDetails;
