import axios from "axios";
import {
  postreq,
  postsucc,
  postfail,
  deletereq,
  deletesucc,
  deletefail,
  updatereq,
  updatesucc,
  updatefail,
} from "./actionTypes";
export const postrequest = () => {
  return { type: postreq };
};
export const postsuccess = () => {
  return { type: postsucc };
};
export const postfailure = () => {
  return { type: postfail };
};
export const postdata = (obj, setRen) => (dispatch) => {
  dispatch(postrequest());
  axios
    .post("https://gorgeous-flight-api1.onrender.com/groceries", obj)
    .then((res) => {
      console.log(res);
      alert(`Product with id${res.data.id} is successfully added`);
      dispatch(postsuccess());

      setRen((prev) => !prev);
    })
    .catch((error) => {
      console.log(error);
      dispatch(postfailure());
    });
};
// delete

export const deleterequest = () => {
  return { type: deletereq };
};
export const deletesuccess = () => {
  return { type: deletesucc };
};
export const deletefailure = () => {
  return { type: deletefail };
};
export const deletedata = (id, setRen) => (dispatch) => {
  console.log(id);
  dispatch(deleterequest());

  axios
    .delete(`https://gorgeous-flight-api1.onrender.com/groceries/${id}`)
    .then((res) => {
      console.log(res);
      alert(`Product with Id ${id} is Successfully deleted`);
      dispatch(deletesuccess());
      setRen((prev) => !prev);
    })
    .catch((error) => {
      dispatch(deletefailure());
      alert("!oops something going wrong");
    });
};
// updatingpart
export const updaterequest = () => {
  return { type: updatereq };
};
export const updatesuccess = () => {
  return { type: updatesucc };
};
export const updatefailure = () => {
  return { type: updatefail };
};
export const updatedata = (id, obj, setRen) => (dispatch) => {
  console.log(id, obj);
  dispatch(updaterequest());
  axios
    .patch(`https://gorgeous-flight-api1.onrender.com/groceries/${id}`, obj)
    .then((res) => {
      console.log(res);
      alert(`Product with id${res.data.id} is successfully Updated`);
      dispatch(updatesuccess());
      setRen((prev) => !prev);
    })
    .catch((error) => {
      console.log(error);
      alert("!Opps something going wrong");
      dispatch(updatefailure());
    });
};
