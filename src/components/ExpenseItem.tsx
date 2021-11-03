
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 12px;
    background-color: #4b4b4b;

`
const ExpenseItem:React.FC = () => {

    return(
        <Card>
        <div>August 21, 2021</div>
        <div>
            <h1>Car Insurance</h1>
            <div>$20.000</div>
        </div>
        </Card>
    )
}

export default ExpenseItem