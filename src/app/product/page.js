'use client';

import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import axios from 'axios';
import Link  from 'next/link';




function AllProductsPage() {
  const [products, setProducts] = useState([]); // Mock data fetched from an API
  const [sortKey, setSortKey] = useState('name');
  const [isAscending, setIsAscending] = useState(true);
  const [loading, setLoading] = useState(false);


  // Fetch products (replace with actual API call)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await axios.get('/api/product/allproduct');
        if (data) {
          setLoading(false);
        }
        setProducts(data.data.data);
      } catch (error) {
        alert('API Error')
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  // Handle Sorting
  const handleSort = (key) => {
    setSortKey(key);
    setIsAscending((prev) => (sortKey === key ? !prev : true));
    const sorted = [...products].sort((a, b) => {
      if (a[key] < b[key]) return isAscending ? -1 : 1;
      if (a[key] > b[key]) return isAscending ? 1 : -1;
      return 0;
    });
    setProducts(sorted);
  };

  // Handle Delete
  const handleDelete = (id) => {
    async function deleteProduct(){
      try {
        await axios.post("/api/product/deleteproduct",{id:id});
      } catch (error) {
        alert("API ERROR")
        
      }
    }
    deleteProduct()
    alert('Product deleted!');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };


  return (
    <div className="p-6 w-full h-full">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="mb-4 flex justify-between items-center">
        <Select onValueChange={(value) => handleSort(value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="type">Type</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={() => setIsAscending(!isAscending)}>
          {isAscending ? 'Ascending' : 'Descending'}
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? 'Loading....'
            : products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.type}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell className="flex gap-2">
                    {/* <Dialog> */}
                        <Link href={`/update/${product.id}`}>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        </Link>
                      {/* <DialogContent>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (editProduct) handleSave(editProduct);
                          }}
                          className="space-y-4"
                        >
                          <Label>Title</Label>
                          <Input
                            value={editProduct?.name || ''}
                            onChange={(e) =>
                              setEditProduct(
                                (prev) =>
                                  prev && { ...prev, name: e.target.value },
                              )
                            }
                          />
                          <Label>Description</Label>
                          <Input
                            value={editProduct?.description || ''}
                            onChange={(e) =>
                              setEditProduct(
                                (prev) =>
                                  prev && {
                                    ...prev,
                                    description: e.target.value,
                                  },
                              )
                            }
                          />
                          <Label>Type</Label>
                          <Input
                            value={editProduct?.type || ''}
                            onChange={(e) =>
                              setEditProduct(
                                (prev) =>
                                  prev && { ...prev, type: e.target.value },
                              )
                            }
                          />
                          <Label>Price</Label>
                          <Input
                            type="number"
                            value={editProduct?.price || 0}
                            onChange={(e) =>
                              setEditProduct(
                                (prev) =>
                                  prev && {
                                    ...prev,
                                    price: parseFloat(e.target.value),
                                  },
                              )
                            }
                          />
                          <DialogFooter>
                            <Button type="submit">Save</Button>
                          </DialogFooter>
                        </form>
                      </DialogContent> */}
                    {/* </Dialog> */}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AllProductsPage;
