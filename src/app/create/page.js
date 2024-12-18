// 'use client';

// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { Toaster } from '@/components/ui/sonner';
// import { toast } from 'sonner';
// import axios from 'axios';



// function ProductCreationPage() {
//   const [loading, setLoading] = useState(false);
//   const [product, setProduct] = useState({
//     name,
//     description,
//     price,
//     rating,
//     category,
//     techStack:[], // array
//     features:[],  // array
//     image,
//     deployLink,
//     productLink,
//     timeStamp,
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [productFileName, setProductFileName] = useState(null);
//   const [imageLoading,setImageLoading] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prev) => ({
//       ...prev,
//       [name]: name === 'price' ? parseFloat(value) || 0 : value,
//     }));
//   };


//   const uploadFile = (e)=>{
//     const {name,files}= e.target;
//       console.log(name,files)
//       const uploadToS3 = async() =>{
//         setImageLoading(true)
//           const fileInfo = new FormData();
//           fileInfo.append('file',files[0]);
//           fileInfo.append('prefix',name)
//           const response = await axios.post("/api/upload",fileInfo);
//           console.log(response);
//           if(response.data){
//             setImageLoading(false)
//           }
//       }
//       uploadToS3()

//   }


//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (!files || files.length === 0) return;

//     const file = files[0];
//     setProduct((prev) => ({ ...prev, [name]: file }));

//     if (name === 'image') {
//       setImagePreview(URL.createObjectURL(file));
//     } else if (name === 'productLink') {
//       setProductFileName(file.name);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       setLoading(true);

//       // Append all fields to FormData
//       Object.keys(product).forEach((key) => {
//         const value = product[key];
//         if (value) {
//           formData.append(key, value);
//         }
//       });

//       const { data } = await axios.post(
//         '/api/product/createproduct',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         },
//       );
//       console.log(data.message);
//       if (data.message == 'Created') {
//         setLoading(false);
//         toast('Product cre+ated successfully!');
//         setTimeout(() => {
//           window.location.reload();
//         }, 1000);
//       }
//     } catch (error) {
//       console.log(error);
//       toast('Error');
//     }
//   };

//   return (
//     <div className="p-6 w-full">
//       <Toaster />
//       <h1 className="text-2xl font-bold mb-6">Create a New Product</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6"
//         encType="multipart/form-data"
//       >
//         <Card>
//           <CardHeader>
//             <CardTitle>Product Information</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div>
//               <Label htmlFor="title">Title</Label>
//               <Input
//                 id="title"
//                 name="title"
//                 placeholder="Enter product title"
//                 value={product.title}
//                 onChange={(e)=>setProduct({...product,title:e.target.value})}
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="description">Description</Label>
//               <Textarea
//                 id="description"
//                 name="description"
//                 placeholder="Enter product description"
//                 value={product.description}
//                 onChange={(e)=>setProduct({...product,description:e.target.value})}
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="type">Type</Label>
//               <Input
//                 id="type"
//                 name="type"
//                 placeholder="Enter product type"
//                 value={product.type}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <Label htmlFor="type">Category</Label>
//               <Input
//                 id="category"
//                 name="category"
//                 placeholder="Enter product catgory"
//                 value={product.category}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <Label htmlFor="price">Price</Label>
//               <Input
//                 id="price"
//                 name="price"
//                 type="number"
//                 placeholder="Enter product price"
//                 value={product.price}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="deployLink">Deploy Link</Label>
//               <Input
//                 id="deployLink"
//                 name="deployLink"
//                 placeholder="Enter deployment link"
//                 value={product.deployLink}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <Label htmlFor="productLink">Upload Product File</Label>
//               <Input
//                 id="productLink"
//                 name="productLink"
//                 type="file"
//                 onChange={uploadFile}
//                 />
//               {/* {productFileName && (
//                 <p className="mt-2">Uploaded File: {productFileName}</p>
//               )} */}
//             </div>
//             <div>
//               <Label htmlFor="image">Upload Image</Label>
//               <Input
//                 id="image"
//                 name="image"
//                 type="file"
//                 onChange={uploadFile}
//               />
//               {imageLoading ? "Uploading..." : null}
//               {/* {imagePreview && (
//                 <img
//                   src={imagePreview}
//                   alt="Preview"
//                   className="mt-4 w-full h-64 object-cover rounded"
//                 />
//               )} */}
//             </div>
//           </CardContent>
//         </Card>
//         <Button
//           type="submit"
//           variant="default"
//           className="w-full"
//           disabled={loading}
//         >
//           {/* Create Product */}
//           {loading ? 'Loading....' : 'Create Product'}
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default ProductCreationPage;


'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import axios from 'axios';

function ProductCreationPage() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    rating: 0,
    category: '',
    techStack: [],
    features: [],
    image: '',
    deployLink: '',
    productLink: ''
  });

  
  const [imageLoading, setImageLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'rating' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleArrayChange = (name, value) => {
    setProduct((prev) => ({
      ...prev,
      [name]: value.split(',').map((item) => item.trim()),
    }));
  };

  const uploadFile = async (e,section) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;

    try {
      setImageLoading(true);
      const fileInfo = new FormData();
      fileInfo.append('file', files[0]);
      fileInfo.append('prefix', name);

      const response = await axios.post('/api/upload', fileInfo);

      if (response.data.message) {
        setProduct((prev) => ({
          ...prev,
          [section]: response.data.message,
        }));
      }

      setImageLoading(false);
    } catch (error) {
      console.error('File upload failed:', error);
      setImageLoading(false);
      toast('File upload failed!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProduct({
      ...product,
      timeStamp:new Date()
    })
    try {
      setLoading(true);    
      const { data } = await axios.post('/api/product/createproduct', product);

      if (data.message === 'Created') {
        setLoading(false);
        toast('Product created successfully!');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.error('Error creating product:', error);
      setLoading(false);
      toast('Error creating product!');
    }
  };

  return (
    <div className="p-6 w-full">
      <Toaster />
      <h1 className="text-2xl font-bold mb-6">Create a New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        <Card>
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter product name"
                value={product.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter product description"
                value={product.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                placeholder="Enter product category"
                value={product.category}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Enter product price"
                value={product.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="rating">Rating</Label>
              <Input
                id="rating"
                name="rating"
                type="number"
                step="0.1"
                max="5"
                placeholder="Enter product rating"
                value={product.rating}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="techStack">Tech Stack</Label>
              <Input
                id="techStack"
                name="techStack"
                placeholder="Comma-separated tech stack (e.g., React, Node.js)"
                onChange={(e) => handleArrayChange('techStack', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="features">Features</Label>
              <Textarea
                id="features"
                name="features"
                placeholder="Comma-separated features"
                onChange={(e) => handleArrayChange('features', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="deployLink">Deploy Link</Label>
              <Input
                id="deployLink"
                name="deployLink"
                placeholder="Enter deployment link"
                value={product.deployLink}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="productLink">Upload Product File</Label>
              <Input
                id="productLink"
                name="productLink"
                type="file"
                onChange={(e)=>uploadFile(e,'image')}
              />
            </div>
            <div>
              <Label htmlFor="image">Upload Image</Label>
              <Input
                id="image"
                name="image"
                type="file"
                onChange={(e)=>uploadFile(e,'productLink')}
              />
              {imageLoading && <p>Uploading image...</p>}
            </div>
          </CardContent>
        </Card>
        <Button type="submit" variant="default" className="w-full" disabled={loading}>
          {loading ? 'Loading...' : 'Create Product'}
        </Button>
      </form>
    </div>
  );
}

export default ProductCreationPage;
