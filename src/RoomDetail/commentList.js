
import React, {useEffect} from 'react';
import CmtItem from "./commentItem";
import Grid from '@material-ui/core/Grid';
function CmtList ({cmtList}) {
    //const totalCmt = cmtList.lenght;
return (
    <>
    <h4 class="comment-title">BÌNH LUẬN </h4>
    <Grid container item xs={12} justify="center" style={{
                marginTop: 30,
                justifyContent: "flex-start",
                flexWrap: "wrap",
                overflowY: 'auto',
                maxHeight: 350
            }}>
    <ul class="commentlist">
        {cmtList.map((cmt) => {
            return <li><CmtItem cmt={cmt}/></li>
        })}
    </ul>
    </Grid>
    </>
)
}

export default CmtList;