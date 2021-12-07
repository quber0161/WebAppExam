const AdminCard = ({title,Dato}) => {



  return (
    <article className="Luker">
      <h2> {title} </h2>
      <p> {Dato} </p>
      <div>
      <button type="button"> see alle deltakelser</button>
      <button type="button"> trekk superbonus </button>
      </div>
      <table>
      <thead>
      <tr>
        <th> # </th>
        <th> brukernavn </th>
        <th> Dato for deltakere </th>
        <th> Kode </th>
      </tr>
      </thead>
      <tbody>
        <tr>
        <td> 1</td>
        <td> ali </td>
        <td> 21.11.2021</td>
        <td> nxwonxownx </td>
        </tr>
      </tbody>

    </table>
    </article>
  );

};

export default AdminCard;
