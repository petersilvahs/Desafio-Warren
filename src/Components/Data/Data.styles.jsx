import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  table {
    width: 80%;
    border-collapse: collapse;
  }
  td {
    text-align: left;
    border: 1px solid black;
  }
  thead {
    background-color: var(--gray);
    border: 2px solid black;
  }
  thead th {
    text-align: left;
    border: 2px solid black;
    padding: 0.2rem;
  }
  thead button {
    border: 0;
    border-radius: none;
    font-family: inherit;
    font-weight: 700;
    font-size: inherit;
    padding: 0.5em;
    margin-bottom: 1px;
  }
  thead button.ascending::after {
    content: "👇";
    display: inline-block;
    margin-left: 1em;
  }
  thead button.descending::after {
    content: "☝️";
    display: inline-block;
    margin-left: 1em;
  }
  tbody td {
    padding: 0.5em;
    border-bottom: 1px solid var(--grayline);
  }
  tbody tr:hover {
    background-color: #eee;
  }
  @media (max-width: 767px) {
    /* Responsive Table */
    .table-responsive {
      display: block;
      position: relative;
      width: 100%;
    }
    .table-responsive thead,
    .table-responsive tbody,
    .table-responsive th,
    .table-responsive td,
    .table-responsive tr {
      display: block;
    }
    .table-responsive td {
      height: 37px;
    }
    .table-responsive th {
      height: 37px;
    }
    .table-responsive thead {
      float: left;
      margin-bottom: 15px;
    }
    .table-responsive tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
    }
    .table-responsive tbody tr {
      display: inline-block;
    }
    .table td:last-child {
      border-right: #999999 solid 1px;
    }
  }
`;

export default Container;