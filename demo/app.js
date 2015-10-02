const React = require('react');
const { Select, Icon, RangeSelector, Loader, DonutChart, TypeAhead } = require('../src/Index');

const styles = {
  block: {
    boxSizing: 'border-box',
    float: 'left',
    width: '20%',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '13px',
    color: '#666666',
    textAlign: 'center',
    borderRight: '1px solid #e5e5e5',
    borderBottom: '1px solid #e5e5e5',
    borderLeft: '1px solid #e5e5e5',
    padding: '30px 0',
    marginRight: '-1px'
  },
  type: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #e5e5e5',
    borderRadius: '2px',
    display: 'inline-block',
    margin: '5px 0',
    padding: '3px 5px'
  }
};

const icons = [
  {
    value: 'accounts',
    displayValue: 'Accounts'
  },
  {
    value: 'add',
    displayValue: 'Add'
  },
  {
    value: 'add-solid',
    displayValue: 'Add Solid'
  },
  {
    value: 'arrow-down',
    displayValue: 'Arrow Down'
  },
  {
    value: 'arrow-left',
    displayValue: 'Arrow Left'
  },
  {
    value: 'arrow-right',
    displayValue: 'Arrow Right'
  },
  {
    value: 'arrow-up',
    displayValue: 'Arrow Up'
  },
  {
    value: 'attention',
    displayValue: 'Attention'
  },
  {
    value: 'auto',
    displayValue: 'Auto'
  },
  {
    value: 'backspace',
    displayValue: 'Backspace'
  },
  {
    value: 'campaigns',
    displayValue: 'Campaigns'
  },
  {
    value: 'caret-down',
    displayValue: 'Caret Down'
  },
  {
    value: 'caret-left',
    displayValue: 'Caret Left'
  },
  {
    value: 'caret-right',
    displayValue: 'Caret Right'
  },
  {
    value: 'caret-up',
    displayValue: 'Caret Up'
  },
  {
    value: 'check',
    displayValue: 'Check'
  },
  {
    value: 'check-solid',
    displayValue: 'Check Solid'
  },
  {
    value: 'checking',
    displayValue: 'Checking'
  },
  {
    value: 'close',
    displayValue: 'Close'
  },
  {
    value: 'close-solid',
    displayValue: 'Close Solid'
  },
  {
    value: 'comparisons',
    displayValue: 'Comparisons'
  },
  {
    value: 'credit-card',
    displayValue: 'Credit Card'
  },
  {
    value: 'delete',
    displayValue: 'Delete'
  },
  {
    value: 'download',
    displayValue: 'Download'
  },
  {
    value: 'edit',
    displayValue: 'Edit'
  },
  {
    value: 'envelope',
    displayValue: 'Envelope'
  },
  {
    value: 'export',
    displayValue: 'Export'
  },
  {
    value: 'folder',
    displayValue: 'Folder'
  },
  {
    value: 'gallery',
    displayValue: 'Gallery'
  },
  {
    value: 'gear',
    displayValue: 'Gear'
  },
  {
    value: 'hamburger',
    displayValue: 'Hamburger'
  },
  {
    value: 'help',
    displayValue: 'Help'
  },
  {
    value: 'home',
    displayValue: 'Home'
  },
  {
    value: 'info',
    displayValue: 'Info'
  },
  {
    value: 'list-view',
    displayValue: 'List View'
  },
  {
    value: 'loans',
    displayValue: 'Loans'
  },
  {
    value: 'md-cash',
    displayValue: 'Cash (MD)'
  },
  {
    value: 'md-check-mark',
    displayValue: 'Check Mark (MD)'
  },
  {
    value: 'md-credit',
    displayValue: 'Creidt (MD)'
  },
  {
    value: 'md-debts',
    displayValue: 'Debts (MD)'
  },
  {
    value: 'md-savings',
    displayValue: 'Savings (MD)'
  },
  {
    value: 'mobile-phone',
    displayValue: 'Mobile Phone'
  },
  {
    value: 'mx',
    displayValue: 'MX'
  },
  {
    value: 'phone',
    displayValue: 'Phone'
  },
  {
    value: 'play',
    displayValue: 'Play'
  },
  {
    value: 'play-solid',
    displayValue: 'Play Solid'
  },
  {
    value: 'savings',
    displayValue: 'Savings'
  },
  {
    value: 'search',
    displayValue: 'Search'
  },
  {
    value: 'segments',
    displayValue: 'Segments'
  },
  {
    value: 'sync',
    displayValue: 'Sync'
  },
  {
    value: 'transactions',
    displayValue: 'Transactions'
  },
  {
    value: 'user',
    displayValue: 'User'
  },
  {
    value: 'view',
    displayValue: 'View'
  },
  {
    value: 'visit',
    displayValue: 'Visit'
  },
  {
    value: 'x-axis',
    displayValue: 'X Axis'
  },
  {
    value: 'y-axis',
    displayValue: 'Y Axis'
  }
];

const donutChartData = [
  {
    name: 'Large Company Stocks',
    value: 30
  },
  {
    name: 'Small Company Stocks',
    value: 45
  }
];

const Demo = React.createClass({
  getInitialState () {
    return {
      icon: {
        value: 'accounts',
        displayValue: 'Accounts'
      },
      windowWidth: document.documentElement.clientWidth || document.body.clientWidth
    }
  },

  componentDidMount () {
    window.addEventListener('resize', this._handleWindowResize);
  },

  componentWillUnmount () {
    window.removeEventListener('resize', this._handleWindowResize);
  },

  _handleSelectChange (option) {
    this.setState({
      icon: option
    });
  },

  _handleWindowResize () {
    this.setState({
      windowWidth: document.documentElement.clientWidth || document.body.clientWidth
    });
  },

  render () {
    return (
      <div>
        <br/><br/>
        <DonutChart
          arcWidth={40}
          data={donutChartData}
          width={this.state.windowWidth - 40}
        />
        <br/><br/>
        <TypeAhead
          items={[
            'JPMorgan Chase',
            'Bank of America',
            'Citigroup',
            'Wells Fargo',
            'The Bank of New York Mellon',
            'U.S. Bancorp',
            'HSBC Bank USA',
            'Capital One',
            'PNC Financial Services',
            'State Street Corporation'
          ]}
          placeholderText='Select a Bank'
        />
        <br/><br/>
        <Select
          isMobile={false}
          onChange={this._handleSelectChange}
          options={icons}
          optionStyle={{
            color: '#333'
          }}
          optionHoverStyle={{
            backgroundColor: '#359BCF',
            color: '#fff'
          }}
          placeholderText='Pick One'
          selected={this.state.icon}
          valid={true}
        />
        <br/><br/>
        <div style={{ textAlign: 'center' }}>
          <Icon
            type={this.state.icon.value}
            size={150}
            style={{
              color: '#359BCF'
            }}
          />
        </div>
        <br/><br/>
        <RangeSelector
          defaultLowerValue={18}
          defaultUpperValue={30}
          interval={1}
          presets={[
            {
              lowerValue: 0,
              upperValue: 13,
              label: 'Gen Z'
            },
            {
              lowerValue: 14,
              upperValue: 34,
              label: 'Millenials'
            },
            {
              lowerValue: 10,
              upperValue: 40,
              label: 'Gen Y'
            },
            {
              lowerValue: 36,
              upperValue: 50,
              label: 'Gen X'
            },
            {
              lowerValue: 51,
              upperValue: 72,
              label: 'Baby Boomers'
            },
            {
              lowerValue: 73,
              upperValue: 90,
              label: 'Silent'
            }
          ]}
          range={100}
          selectedColor='#359BCF'
        />
        <br/><br/>
        <div style={{ padding: '100px', position: 'relative' }}>
          <Loader isLoading={true} isRelative={true} />
        </div>
      </div>
    );
  }
});

React.render(<Demo />, document.getElementById('demo'));