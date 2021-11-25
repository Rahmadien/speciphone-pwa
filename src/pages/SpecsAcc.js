import { Component, useState, useEffect } from "react";
import { useParams } from "react-router";
import SpecWatch from "../components/SpecWatch";

import React from 'react'

function SpecsAcc() {
  const {id} = useParams()
  const [accessoris, setAccessoris] = useState({})
  console.log(accessoris)
  useEffect(() => {
    fetch ('https://my-json-server.typicode.com/Rahmadien/accessoris/db/')
        .then((res) => res.json())
        .then(json => setAccessoris(json.accessoris[id-1])).catch(err => console.log(err))
  }, [id])


  return (
    <div className="mt-4 text-center">
        {accessoris&& <SpecWatch accessoris={accessoris} />
              }
      </div>
  )
}

export default SpecsAcc;