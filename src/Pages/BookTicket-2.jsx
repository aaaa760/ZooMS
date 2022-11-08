import Button from "../Components/Button";
import { useState } from "react";

function BookTicket_step_2() {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  return (
    <div className="flex justify-center items-center bg-teal-300 w-screen h-screen">
      <div className="flex w-5/12">
        <div className="grid grid-columns-1 grid-rows-4 gap-6 w-full bg-white p-8 rounded-lg text-center h-fit">
          <div>
            <p className="bg-teal-200 rounded-lg p-2">Zoo Entrance</p>
          </div>
          <table className="w-full border-separate text-left ml-auto mr-auto table-auto">
            <tr className="border-b-8 border-gray-500">
              <td>Child (5-12 years)</td>
              <td>50</td>
              <td>
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      const temp = child !== 0 ? child - 1 : child;
                      setChild(temp);
                    }}
                  >
                    -
                  </button>
                  <span>{child}</span>
                  <button
                    onClick={() => {
                      const temp = child + 1;
                      setChild(temp);
                    }}
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Adult</td>
              <td>100</td>
              <td>
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      const temp = adult !== 0 ? adult - 1 : adult;
                      setAdult(temp);
                    }}
                  >
                    -
                  </button>
                  <span>{adult}</span>
                  <button
                    onClick={() => {
                      const temp = adult + 1;
                      setAdult(temp);
                    }}
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
          </table>
          <table className="w-full border-separate text-left ml-auto mr-auto table-auto">
            <tr className="border-b-8 border-gray-500">
              <td>Total Tickets</td>
              <td>
                <div className="flex justify-between">
                  <span>{child + adult}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Total Price</td>
              <td>
                <div className="flex justify-between">
                  <span>{child * 50 + adult * 100}</span>
                </div>
              </td>
            </tr>
          </table>
          <div>
            <Button>Proceed To Pay</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTicket_step_2;
