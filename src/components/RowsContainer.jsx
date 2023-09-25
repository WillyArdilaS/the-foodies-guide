import TableRow from "./TableRow"

const RowsContainer = () => {
  return (
    <>
        <article className="flex flex-col justify-between items-center h-screen w-full overflow-y-auto" id="topTable">
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
        </article>
    </>
  )
}

export default RowsContainer