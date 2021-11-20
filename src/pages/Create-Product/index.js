import react,{useState} from "react"
import styles from "./style.module.css";
import axios from 'axios';
import AdminTopNavbar from "../../components/AdminTopNavbar";

const CreateProduct = () =>{
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [menJeans,setMenJeans] = useState('');
    const [selectedFile,setSelectedFile] = useState("")

    const _fileChangedHandler = (event) => {       
      setSelectedFile(event.target.files[0])
    }

    const onSubmit = () => {
      // console.log(menJeans);
      if(title==""){
        alert("Enter Name")
        return false
      }
      if(menJeans==""){
        alert("Enter Category")
        return false
      }
      if(description==""){
        alert("Enter description")
        return false
      }
      if(selectedFile==""){
        alert("Enter description")
        return false
      }
      if(price==""){
        alert("Enter Price")
        return false
      }
      var formData = new FormData()
      formData.append("name", title);
      formData.append("menJeans", menJeans);
      formData.append("description", description);
      formData.append("productimages", selectedFile);
      formData.append("price", price);
      axios.post(`https://alummat.herokuapp.com/products/menjeans/`, formData) 
      console.log(menJeans);
      alert("Product Added Successfully")
     setTitle("")
     setPrice("")
     setMenJeans("")
     setSelectedFile("")
     setDescription("")
    }
    
    return(
        <div className={styles.Container}>
          <AdminTopNavbar />
      <span className={styles.heading}>Add Product</span>
      <input type="text" name="name" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title" className={styles.email} />
      <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" className={styles.email} />
      <textarea cols="20" rows="5" 
      onChange={(e)=>setDescription(e.target.value)}
      type="text" placeholder="Enter Description" className={styles.email} />
      <input type="file" className={styles.password} class="form-control"
      onChange={_fileChangedHandler}
      />
      <label className={styles.select}>
          Pick Category:
          <select className={styles.options} value={menJeans}  onChange={(e)=>setMenJeans(e.target.value)}>
            <option value="menjeans">Men Jeans</option>
            <option value="womenjeans">Women Jeans</option>
            <option value="juniorjeans">Junior Jeans</option>
            <option value="menjacket">Men Jacket</option>
            <option value="womenjacket">Women Jacket</option>
            <option value="juniorjacket">Junior Jacket</option>
            <option value="menshort">Men Short</option>
            <option value="womenshort">Women Short</option>
            <option value="juniorshort">Junior Short</option>
          </select>
        </label>
      <span className={styles.btn} onClick={onSubmit} type="submit">Add Product</span>
    </div>
    )
}

export default CreateProduct;