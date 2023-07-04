import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Routes, Route, useNavigate, useSearchParams } from "react-router-dom";


function Views({ email }) {
  const [itemsPersons, setItemsPersons] = useState([])
  const [itemsPerson, setItemsPerson] = useState([])
  const [param, setparam] = useSearchParams()

  const navigate = useNavigate()
  useEffect(() => {
    let url
    if (param.get('email')) {
      url = 'http://localhost:8010/getitems?email=' + param.get('email')
      axios.get(url)
        .then(res => {
          console.log({data:res.data[0].data,p:res.data[0]})
          setItemsPerson(res.data[0].data)
        }).catch(error => {
          console.error('Error! ' + error)
        })
    } else {
      url = 'http://localhost:8010/getitems'
      axios.get(url)
        .then(res => {
          var items = []
          console.log(res.data)
          res.data.map(item1 => {
            item1.data.map(item2 => {
              items.push({
                id:items.length,
                name: item2.name,
                price: item2.price,
                filename: item2.filename,
                email: item1.email
              })
            })
          })
          console.log(items)
          setItemsPersons(items)
        }).catch(error => {
          console.error('Error! ' + error)
        })
    }

  }, [])

  return <div>

    {
      itemsPersons  && itemsPersons.length>0?
        <div>

          <h4>
            {itemsPersons.length} items
          </h4>
          <div className="views-items" >
            {
              itemsPersons.reverse().map((item, ind, arr) => {
                return <div className="item" key={item.id} onClick={() => {
                  window.location.replace(`/item/${item.email}/${item.id}`)
                }} >
                  
                    <img src={item.filename} alt="" />
                    <div className="details">
                      <h5>name:{item.name}</h5>
                      <h5>price:{item.price}</h5>
                    </div>
                  
                </div>
              })
            }
          </div>
        </div>

        : itemsPerson  && itemsPerson.length>0?
          <div>
            <h4>
              {itemsPerson.length} items
            </h4>
            <div className="views-items" >
              {
                itemsPerson.reverse().map((item) => {
                  return <div className="item" key={item.id} onClick={() => {
                    window.location.replace(`/item/${ param.get('email')}/${item.id}`)
                  }} >
                    
                      <img src={item.filename} alt="" />
                      <div className="details">
                        <h5>name:{item.name}</h5>
                        <h5>price:{item.price}</h5>
                      </div>
                    
                  </div>
                })
              }
            </div>
          </div>
          : <div>
            <h2>Not fount</h2>
          </div>
    }

  </div>;
}

export default Views;
