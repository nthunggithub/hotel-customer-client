import React, { useState } from 'react';
import api from '../callapi';
function InputCmt({ match, callUpdateListComment }) {
    const [newCmt, setNewCmt] = useState();
    const handleChangeCmt = (event) => {
        setNewCmt(event.target.value);
    };
    const handleSubmitCmt = async (e) => {
        e.preventDefault();
        if (newCmt && typeof newCmt === 'string' && newCmt.length > 0 && newCmt !== " ") {
            await api.post("/postcomment", { comment: newCmt, MaP: match.params.id, MaKH: parseInt(localStorage.getItem("MaKH")) });
            callUpdateListComment();
        }
        setNewCmt(null);
    }
    return (
        <>
            <form action="#" method="post" class="comment-form" onSubmit={(e) => handleSubmitCmt(e)}>
                <div class="row">
                    <div class="col-sm-12">
                        <textarea name="newCmt" placeholder="Nội dung bình luận của bạn ...." class="field-textarea" onChange={handleChangeCmt}></textarea>
                    </div>
                    <div class="col-sm-12">
                        <button class="awe-btn awe-btn-14" type="submit">GỬI</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default InputCmt;