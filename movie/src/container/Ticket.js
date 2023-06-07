import React, { useEffect, useState, useParams } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import { Link } from 'react-router-dom';


function Ticket() {
  let [data, setData] = useState('');
  let [active, SetActive] = useState(true)


  useEffect(() => {
    if (active) {
      fetch('http://localhost:3005/movie', {
      }).then(res => {
        res.json().then(record => {
          console.log(record)
          setData(record);
          SetActive(false)
        })
          .catch(err => {
            console.log(err);
          })
      }).catch(err => { console.log(err) })
    }
  }, [data])

  return (
    <div className='bak-t' >

      <header className="top">
        <div>
          <div className="mou d-flex justify-content-between text-align-center ">
            <div>
              <img src={require("../assets/images/logo.png")} alt width="125px" />
            </div>
            <div className="d-flex mt-4">
              <div>
                <select name id>
                  <option value={0}>--select City--</option>
                  <option value="surat">surat</option>
                  <option value="rajkot">Rajkot</option>
                  <option value="dev">dev</option>
                </select>
              </div>
              <div className="sign">
              <Link to="/"><a href='#'>ADD Movie</a></Link>
              </div>
              <div className="menu10">
                <a href="#"> <i className="fa-solid fa-bars" /></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='container'>
        <div className="row">

          {data && data.filter((va, index) => {
            return va;
          }).map((v, i) => {
            return (
              <div className=" col-md-3 ">
                <div className="mx-2 mt-5">
                  <div className="cd">
                    <div className="box ">
                      <Link to={'/ditail/' + v.id}><img src={require("../assets/images/" + v.img)} alt='k.g.f' width="100%" /></Link>
                    </div>
                    <div className="reat p-2 d-flex align-items-center">
                      <i className="fa-solid fa-star" style={{ color: '#ffffff' }} />
                      <sapn className="ps-2">{v.reting}</sapn>
                      <span className="voate">50.90M Voates</span>
                    </div>
                  </div>
                  <div>
                    <h5>{v.tital}</h5>
                    <span className="ger">{v.genre}</span>
                  </div>
                </div>
              </div>

            )
          })}


        </div>
      </div>
    </div>

  )
}
export default Ticket;