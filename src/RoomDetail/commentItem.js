import React from 'react';
import AVT from "../Icon/avt.jpg";
function CmtItem ({cmt}) {
return (
    <>
    <div class="comment-body">
        <a class="comment-avatar"><img src={AVT} alt="" /></a>
        <p>{cmt.NoiDung}</p>
        <span class="comment-meta">
            <a href="#">{cmt.TenTaiKhoan}</a> - {cmt.NgayBL}
        </span>
     </div>
    </>
)
}

export default CmtItem;