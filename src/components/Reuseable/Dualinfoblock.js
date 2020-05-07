import React from "react"
import Heading from "./Heading"
import Cardtitle from "./Cardtitle"
import { Link } from "gatsby"
import ImageUploader from "./ImageUploader"

export default function Dualinfoblock({ heading, cardname, imgUrl }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              aspernatur quibusdam libero consequuntur fugit a corporis. Officia
              minus iste asperiores! Nesciunt quas sit, veritatis laboriosam,
              harum nemo optio dicta inventore quaerat dolorum sed velit
              adipisci enim quo aspernatur praesentium perferendis molestiae.
              Perferendis praesentium alias sint quas delectus saepe, aliquid
              harum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dicta beatae quisquam laborum ut at repellat illo
              tenetur mollitia enim, accusamus incidunt obcaecati eius fuga?
              Quaerat eius corporis illum a enim ea voluptas esse libero, animi
              quibusdam ad tempora vitae tempore officiis itaque, rerum autem
              hic laboriosam, optio deleniti reiciendis officia quisquam.
              Corporis voluptas tempora provident laborum expedita, debitis
              numquam quam praesentium quo eius illum harum veniam pariatur
              adipisci, earum nihil, vel odit similique commodi perferendis
              inventore reprehenderit minima! Temporibus est hic molestias
              libero aliquid aliquam consectetur iste similique eligendi? Beatae
              commodi reprehenderit corporis incidunt, placeat assumenda
              possimus rerum tenetur.
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <ImageUploader pic={imgUrl} />
              <div className="card-body">
                <Cardtitle cardtitle={cardname} />
                <p className="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  quisquam modi id saepe, fuga harum similique aliquid itaque
                  nesciunt blanditiis esse delectus earum? Aliquam amet cumque
                  iste officia. Eligendi, adipisci!
                </p>
                <Link to="#" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
