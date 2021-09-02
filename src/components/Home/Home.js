import './Home.css';
import img630 from '../../assets/630x300.png';
import img215 from '../../assets/215x100.png';
import img80 from '../../assets/80x80.png';

function Home() {
  return (
      <div >
          <section>
              <figure id="headline" className="figure row">
                  <figcaption className="figure-caption col-sm">
                      <h1>Lorem ipsum dolor sit amet</h1>
                      <p>Consectetur adipisicing elit. Blanditiis, consectetur dignissimos dolores, eius, hic ipsam laborum
                          minus nobis numquam odio perferendis praesentium provident quas quidem sequi sit suscipit
                          temporibus voluptates?</p>
                      <a href="#" className="readMore">Read More &raquo;</a>
                  </figcaption>
                  <img src={img630} className="figure-img img-fluid col-sm" alt="Not found" width="630" height="300"/>
              </figure>
          </section>
          <section className="clear articles">
              <article>
                  <h2>Lorum ipsum dolor</h2>
                  <img src={img80} alt="" />
                  <p>Consectetur adipisicing elit. Deleniti eveniet iusto perspiciatis quaerat qui veritatis! Ab debitis
                      dolore dolorum harum, ipsa quae quisquam quod sit soluta. Consequatur explicabo omnis unde?
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda blanditiis deserunt
                      dolore ea eum exercitationem minima obcaecati, provident qui quibusdam ratione reiciendis rem,
                      repellendus sed suscipit voluptas. Culpa, incidunt!</p>
                  <a href="#" className="readMore">Read More &raquo;</a>
              </article>
              <article>
                  <h2>Lorum ipsum dolor</h2>
                  <img src={img80} alt="" />
                  <p>Consectetur adipisicing elit. Deleniti eveniet iusto perspiciatis quaerat qui veritatis! Ab debitis
                      dolore dolorum harum, ipsa quae quisquam quod sit soluta. Consequatur explicabo omnis unde?
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda blanditiis deserunt
                      dolore ea eum exercitationem minima obcaecati, provident qui quibusdam ratione reiciendis rem,
                      repellendus sed suscipit voluptas. Culpa, incidunt!</p>
                  <a href="#" className="readMore">Read More &raquo;</a>
              </article>
              <article>
                  <h2>Lorum ipsum dolor</h2>
                  <img src={img80} alt="" />
                  <p>Consectetur adipisicing elit. Deleniti eveniet iusto perspiciatis quaerat qui veritatis! Ab debitis
                      dolore dolorum harum, ipsa quae quisquam quod sit soluta. Consequatur explicabo omnis unde?
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda blanditiis deserunt
                      dolore ea eum exercitationem minima obcaecati, provident qui quibusdam ratione reiciendis rem,
                      repellendus sed suscipit voluptas. Culpa, incidunt!</p>
                  <a href="#" className="readMore">Read More &raquo;</a>
              </article>
          </section>
          <section className="clear articles">
              <article>
                  <img src={img215} alt="" />
                  <h2>Lorum ipsum dolor</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt doloribus.</p>
                  <a href="#" className="readMore">Read More &raquo;</a>
              </article>
              <article >
                  <img src={img215} alt="" />
                  <h2>Lorum ipsum dolor</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt doloribus.</p>
                  <a href="#" className="readMore">Read More &raquo;</a>
              </article>
              <article >
                  <img src={img215} alt="" />
                  <h2>Lorum ipsum dolor</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt doloribus.</p>
                  <a href="#" className="readMore">Read More &raquo;</a>
              </article>
              <article >
                  <img src={img215} alt="" />
                  <h2>Lorum ipsum dolor</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt doloribus.</p>
                  <a href="#" className="readMore">Read More &raquo;</a>
              </article>
          </section>
      </div>
  );
}

export default Home;
