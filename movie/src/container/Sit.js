import React from 'react'
import { useEffect, useState } from 'react';
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import { Link,useParams } from 'react-router-dom';

function Sit() {
    let [data, setData] = useState('');
    let [active, SetActive] = useState(true)
    let { id } = useParams("")

    useEffect(() => {
        if (active) {
            fetch('http://localhost:3005/movie/' + id, {
            }).then(res => {
                res.json().then(record => {
                    let dataRecord = [record]
                    setData(dataRecord);
                    SetActive(false)
                })
                    .catch(err => {
                        console.log(err);
                    })
            }).catch(err => { console.log(err) })
        }
    }, [data])
    return (
        <div>
            <div className="sit d-flex justify-content-between">
                {data && data.filter((va, index) => {
                    return va;
                }).map((v, i) => {
                   return(
                    <div>
                    <div className="sit-1 d-flex">
                        <Link to={'/book1/'+id}><i className="fa-sharp fa-solid  fa-angle-left" /></Link>
                        <h5>{v.tital}</h5>
                        <span>{v.certificate}</span>
                    </div>
                    <div className="d-flex sit-2">
                        <p>Cinepolis: Imperial Square Mall, Surat</p>
                        <span>Today, 13 Apr, 03:00 PM</span>
                    </div>
                </div>
                   )
                })}
                <div className="sit-3">
                    <p>2 Tickits</p>
                </div>
                <div className="sit-4">
                    <i className="fa-solid fa-xmark" style={{ color: '#ffffff' }} />
                </div>
            </div>
            <div className="d-flex ms-3 ">
                <div className="siting_inner">
                    <a href="#">10:30 Am</a>
                    <p>classic</p>
                </div>
                <div className="siting_inner">
                    <a href="#">01:00 pm</a>
                    <p>classic</p>
                </div>
            </div>
            <div className="container">
                <div className="sit-5 align-self-center">
                    <span className="mt-5">PREMIUM-Rs. 300.00</span>
                    <div className=" sit-6 d-flex">
                        <h6>K</h6>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                        <a href="#">17</a>
                        <a href="#">18</a>
                        <a href="#">19</a>
                        <a href="#">20</a>
                        <a href="#">21</a>
                        <a href="#">22</a>
                        <a href="#">23</a>
                        <a href="#">24</a>


                  
                    </div>
                    <div className=" sit-6 d-flex mb-4 ">
                        <h6>I</h6>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">17</a>
                        <a href="#">18</a>
                        <a href="#">19</a>
                        <a href="#">20</a>
                    </div>
                    <span>EXECUTIVER-Rs. 200.00</span>
                    <div className=" sit-6 d-flex">
                        <h6>H</h6>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">17</a>
                        <a href="#">18</a>
                        <a href="#">19</a>
                        <a href="#">20</a>
                    </div>
                    <div className=" sit-6 d-flex">
                        <h6>G</h6>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">17</a>
                        <a href="#">18</a>
                        <a href="#">19</a>
                        <a href="#">20</a>
                    </div>
                    <div className=" sit-6 d-flex">
                        <h6>F</h6>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">17</a>
                        <a href="#">18</a>
                        <a href="#">19</a>
                        <a href="#">20</a>
                    </div>
                    <div className=" sit-6 d-flex">
                        <h6>E</h6>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">17</a>
                        <a href="#">18</a>
                        <a href="#">19</a>
                        <a href="#">20</a>
                    </div>
                    <div className=" sit-6 d-flex">
                        <h6>D</h6>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">17</a>
                        <a href="#">18</a>
                        <a href="#">19</a>
                        <a href="#">20</a>
                    </div>
                    <div className=" sit-6 d-flex">
                        <h6>C</h6>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                    </div>
                    <span>NORMAL-Rs 100.00</span>
                    <div className=" sit-6 d-flex">
                        <h6>B</h6>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                    </div>
                    <div className=" sit-6 d-flex">
                        <h6>A</h6>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">01</a>
                        <a href="#">02</a>
                        <a href="#">03</a>
                        <a href="#">04</a>
                        <a href="#">05</a>
                        <a href="#">06</a>
                        <a href="#">07</a>
                        <a href="#">08</a>
                        <a href="#">09</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <div className="d-flex sit-10">
                            <a href="#">20</a>
                            <a href="#">20</a>
                        </div>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                    </div>
                </div>
            </div>

            <div class='scr'>
                <h4>All eyes this way please!</h4>
            </div>
        </div>

    )
}
export default Sit;
