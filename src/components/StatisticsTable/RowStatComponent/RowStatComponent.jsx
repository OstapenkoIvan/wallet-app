const RowStatComponent = arr => {
  arr.map(({ name, type, total }, idx) => {
    return type === 'EXPENSE' ? (
      <tr key={idx}>
        <td className={[scss.colName, scss[`col-${idx + 1}`]].join(' ')}>
          {name}
        </td>
        <td className={[scss.colTotal, scss[`col-${idx + 1}`]].join(' ')}>
          {total}
        </td>
      </tr>
    ) : null;
  });
};

export default RowStatComponent;
