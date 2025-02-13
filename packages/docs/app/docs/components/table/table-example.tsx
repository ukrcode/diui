
export default function TableExample() {
    return (
        <table className="di-table">
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam at possimus illum mollitia sunt nihil eveniet, ullam placeat ab fugit obcaecati quod officia debitis modi hic ea in vero?</td>
                    <td>Row 1, Cell 2</td>
                    <td>Row 1, Cell 3</td>
                </tr>
                <tr>
                    <td>Row 2, Cell 1</td>
                    <td>Row 2, Cell 2</td>
                    <td>Row 2, Cell 3</td>
                </tr>
                <tr>
                    <td>Row 3, Cell 1</td>
                    <td>Row 3, Cell 2</td>
                    <td>Row 3, Cell 3</td>  
                </tr>
            </tbody>
        </table>
    );
}