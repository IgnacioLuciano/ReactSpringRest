var Employee = React.createClass({
    render: function() {
      return (<div>employee</div>);
    }
  });
  var EmployeeTable = React.createClass({
    render: function() {
      return (<div>employee table</div>);
    }
  });
   
  ReactDOM.render(
    <EmployeeTable />, document.getElementById('root')
  );

  var Employee = React.createClass({
    render: function() {
      return (<div>employee</div>);
    }
  });
  var EmployeeTable = React.createClass({
    render: function() {
      return (<div>employee table</div>);
    }
  });

  var EMPLOYEES = [
    {name: 'Joe Biden', age: 45, years: 5},
    {name: 'President Obama', age: 54, years: 8},
    {name: 'Crystal Mac', age: 34, years: 12},
    {name: 'James Henry', age: 33, years: 2}
  ];