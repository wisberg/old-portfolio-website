import React from 'react';
import TableauReport from 'tableau-react-embed';



const TableauProject = props => {
return(
<div>
<a href = "/">Return</a>
<TableauReport
url = "https://public.tableau.com/shared/SPM9FJ22X?:display_count=y&:origin=viz_share_link"
tolken = "<TRUSTED TICKET HERE>"
/>
</div>
)
}

export default TableauProject;
