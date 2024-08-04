import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "../App.css";
import { useSelector } from "react-redux";
import axios from "axios";
export default function Print() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const totalAmount = useSelector((state) => state.reservation.totalAmount);
  const theHotel= useSelector((state) =>state.hotel.theHotel)
  const checkInDate = useSelector((state) => state.reservation.reservationDate.checkInDate);
  const checkOutDate = useSelector((state) => state.reservation.reservationDate.checkOutDate);
  const daysNumber = useSelector((state) => state.reservation.daysNumber);
  const supplement = useSelector((state) => state.reservation.supplement);
  const roomData = useSelector(state => state.roomData.values); 
  const {name,number,observation, payer, rest} = useSelector(state => state.client); 
  const addReservation = async () => {
    try {
      await axios.post(`http://127.0.0.1:5000/app/reservation/add/${1}`, {
         client: name, teleClient: number, hotelName: theHotel.name, chekin: checkInDate, checkout: checkOutDate,
        nombreJours: daysNumber, nombreChambres: roomData.length, total: totalAmount, payer: payer, reste: rest, cotisationHotel:200, observation, hotelId: theHotel.id
      });
      alert('done');
    
    } catch (error) {
      alert('error');
      console.log(error)
    }
  };
  
  return (
    <>
    <button onClick={()=>{console.log(roomData)}} >test</button>
      <div className="Print" ref={componentRef}>
        {/* <div className="header">
          <span className="logo">DST</span>
          <nav>
            <span>Blog</span>
            <span>Categories</span>
            <span>Tags</span>
          </nav>
        </div> */}
        <div className="hero-section">
          <h1>the logo of DST</h1>
        </div>
        <main>
          <div class="voucher">
            <div class="voucher-header">
              {/* <h1>[Hotel Name]</h1> */}
              <h2>Voucher N°: 00001/09/2024</h2>
            </div>
            <div class="voucher-body">
              <div class="voucher-details">
                <table>
                  <tbody>
                    <tr>
                      <th>Hotel:</th>
                      <td id="voucher-number">{theHotel.name}</td>{" "}
                    </tr>
                    <tr>
                      <th>Adress:</th>
                      <td id="reservation-number">
                        {theHotel.emailReception}{" "}<br/>{theHotel?.emailReservation}
                      </td>{" "}
                    </tr>
                    <tr>
                      <th>Téléphone Hotel:</th>
                      <td id="guest-name">{theHotel?.phone}</td>
                    </tr>
                    <tr>
                      <th>Client:</th>
                      <td id="check-in-date">{name}</td>{" "}
                    </tr>
                    <tr>
                      <th>Téléphone Client:</th>
                      <td id="check-in-date">{number}</td>{" "}
                    </tr>
                    <tr>
                      <th>Date de reéservation:</th>
                      <td id="check-out-date">12/11/2023</td>{" "}
                    </tr>
                    <tr>
                      <th>Date de séjour:</th>
                      <td id="check-out-date">
                        Du {checkInDate} Au {checkOutDate}
                      </td>{" "}
                    </tr>
                    <tr>
                      <th>Nuitées:</th>
                      <td id="check-out-date">{daysNumber} Nuitées</td>
                    </tr>
                    <tr>
                      <th>Arrangemnt:</th>
                      <td id="check-out-date">{supplement}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="voucher-room-details">
              <h3>Chambre Details</h3>
              <table>
                <tbody>
                  <tr>
                    <th>Chambre</th>
                    <th>Nombres des adultes</th>
                    <th>Nombre des enfants</th>
                    <th>Âge des enfants</th>
                  </tr>
                  {roomData.map((room, index) => (
                <tr key={index}>
                  <td>{`Chambre ${index + 1}`}</td>
                  <td>{`${room.nAdult} adulte(s)`}</td>
                  <td>{`${room.nKids} enfant(s)`}</td>
                  <td>
                    {room.kidsAge?.length > 0 ? (
                      room.kidsAge.map((age, i) => (
                        <span key={i}>{`${age} ans`} {i < room.kidsAge.length - 1 && <br />}</span>
                      ))
                    ) : (
                      <span>-- aucun enfants  --</span>
                    )}
                  </td>
                </tr>
              ))}
              {roomData[0].baby&&<p id="baby">Remarque: La réservation contai un bébé</p>}
                </tbody>
              </table>
            </div>
            <div className="observation">
              <h4 id="h4">Observation</h4>
              <p>{observation}</p>
            </div>
            <div class="voucher-footer">
      <p>[Hotel Signature Line]</p>
      <p>[Guest Signature Line]</p>
    </div>
          </div>
        </main>
      </div>
      <button onClick={handlePrint}>Imprime</button>
      <button onClick={addReservation}>enregestrer</button>
    </>
  );
}
