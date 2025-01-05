"use client";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState,useEffect } from "react";
import { fetchInfo } from "@/config/fetch";


function page() {
  const [order, setOrder] = useState(0);
  const [sale, setSale] = useState(0);
  const trafficData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Order Traffic",
        data: [500, 600, 700, 550, 800, 750, 900],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };


  useEffect(()=>{
    (async function (){
       try {
         const orderInfo = await fetchInfo('/api/analysis/orders');
         setOrder(orderInfo.data.message)
       } catch (error) {
        setOrder(0)
       }
    })()
  },[])


  return (
    <>
      <div>
        <Card className="border-none ">
            <CardHeader className="text-4xl font-bold ">
                Order Dashboard
            </CardHeader>
          <CardContent className="flex flex-row items-center justify-stretch gap-5">
            <Card>
              <CardHeader className="font-semibold text-xl">Number of order</CardHeader>
              <CardContent className="text-3xl">{order}</CardContent>
            </Card>
            <Card>
                <CardHeader className="font-semibold text-xl">
                    Top salesing product
                </CardHeader>
                <CardContent className="text-3xl">
                    {sale}
                </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
      <div className="w-full h-[20rem]">
        <Line data={trafficData} />
      </div>
    </>
  );
}

export default page;
