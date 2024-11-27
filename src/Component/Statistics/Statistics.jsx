import { Helmet } from "react-helmet-async";
import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useLoaderData } from "react-router";

export default function Statistics() {
  const data = useLoaderData();
  console.log(data);
  
  return (
    <div>
      <Helmet>
        <title>Statistics | GadgetBuy</title>
        <meta name="description" content="Welcome Statistics page" />
      </Helmet>
     <div className="bg-banner_color text-center mb-12">
     <h2 className="text-3xl text-white pt-8 pb-4">Statistics</h2>
     <p className="text-white w-7/12 mx-auto pb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
     </div>

     <div className="bg-slate-100 pt-12">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            {/* Use product_title for the X-axis */}
            <XAxis dataKey="product_title" label={{ value: 'Product', position: 'insideBottomRight', offset: 0 }} />
            <YAxis label={{ value: 'Price', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            {/* Bar chart for price */}
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            {/* Line chart for rating */}
            <Line type="monotone" dataKey="rating" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
