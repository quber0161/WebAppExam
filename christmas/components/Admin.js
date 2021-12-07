import AdminCard from "./Card";

const Admin = () => {

  const products = [
  {id:1, title: "Luke 1", Dato: "Tilgjengelig fra: 05.12.12", },
  {id:2,title: "Luke 2", Dato:"Tilgjengelig fra: 05.12.12",  }


  ]


  return (
    <>
   <h2 id="Header"> Admin </h2>
   <section className="yup">
    {products.map((products) => (
      <AdminCard 
      Key={products.Key}
      title={products.title}
      Dato={products.Dato}
      
      
      />
    ))}
  </section>
  </>
  );

};

export default Admin;
