/**
 * Gregory Pellegrin
 * pellegrin.gregory.work@gmail.com
 */

function indiceResponse (response)
{
	if (response.isError())
	{
		alert(response.getMessage() + ' ' + response.getDetailedMessage());
		
		return;
	}
	
	var data = response.getDataTable();
	var table = new google.visualization.Table(document.getElementById('indiceValueTable'));
	var cssClassNames =
	{
		headerRow: 'indiceTh',
		tableRow: 'indiceTd',
		oddTableRow: '',
		hoverTableRow: 'indiceTdHover',
		selectedTableRow: 'indiceTdSelected',
		headerCell: 'indiceThSpan',
		tableCell: 'indiceTdSpan',
		rowNumberCell: ''
	};
	
	if (data.getNumberOfRows() > 0)
	{
		data.removeRows(0, data.getNumberOfRows() - 1);

		data.setProperties(0, 0, {style: 'color: blue;'});

		for (var i = 1; i < data.getNumberOfColumns(); i++)
		{
			if (data.getValue(0, i).indexOf('-') > -1)
				data.setProperties(0, i, {style: 'color: red;'});
			else
				data.setProperties(0, i, {style: 'color: green;'});
		}

		table.draw(data,
		{
			showRowNumber: false,
			allowHtml: true,
			sort: 'disable',
			cssClassNames: cssClassNames
		});
	}
}

function stockValueResponse (response)
{
	if (response.isError())
	{
		alert(response.getMessage() + ' ' + response.getDetailedMessage());
		
		return;
	}
	
	var data = response.getDataTable();
	var table = new google.visualization.Table(document.getElementById('stockValueTable'));
	var cssClassNames =
	{
		headerRow: 'dataTableTh',
		tableRow: 'dataTableTdEven',
		oddTableRow: 'dataTableTdOdd',
		hoverTableRow: 'dataTableTdHover',
		selectedTableRow: 'dataTableTdSelected',
		headerCell: 'dataTableThSpan',
		tableCell: 'dataTableTdSpan',
		rowNumberCell: ''
	};
	var netChangeColorFormatter = new google.visualization.ColorFormat();
	var doubleNumberFormatter = new google.visualization.NumberFormat({decimalSymbol: '.', groupingSymbol: ',', fractionDigits: 2});
	var integerNumberFormatter = new google.visualization.NumberFormat({decimalSymbol: '.', groupingSymbol: ',', fractionDigits: 0});
	
	netChangeColorFormatter.addRange(-9999999, 0, 'red', '00FFFFFF');
	netChangeColorFormatter.addRange(0, 9999999, 'green', '00FFFFFF');
	
	if (data.getNumberOfRows() > 0)
	{
		netChangeColorFormatter.format(data, 2);
		netChangeColorFormatter.format(data, 3);

		doubleNumberFormatter.format(data, 1);
		doubleNumberFormatter.format(data, 2);
		doubleNumberFormatter.format(data, 3);
		doubleNumberFormatter.format(data, 4);
		doubleNumberFormatter.format(data, 5);
		doubleNumberFormatter.format(data, 6);
		doubleNumberFormatter.format(data, 7);
		doubleNumberFormatter.format(data, 8);
		doubleNumberFormatter.format(data, 9);
		doubleNumberFormatter.format(data, 10);
		doubleNumberFormatter.format(data, 11);

		integerNumberFormatter.format(data, 12);
		integerNumberFormatter.format(data, 13);

		table.draw(data,
		{
			showRowNumber: false,
			allowHtml: true,
			alternatingRowStyle: true,
			page: 'enable',
			pageSize: getPageSize('stockValue'),
			sortColumn: 2,
			sortAscending: false,
			cssClassNames: cssClassNames
		});
	}
}

function stockFilterResponse (response)
{
	if (response.isError())
	{
		alert(response.getMessage() + ' ' + response.getDetailedMessage());
		
		return;
	}
	
	var data = response.getDataTable();
	var dashboard = new google.visualization.Dashboard(document.getElementById('stockFilter'));
	var symbolFilter = new google.visualization.ControlWrapper(
	{
		controlType: 'StringFilter',
		containerId: 'symbolStockFilterFilter',
		options:
		{
			filterColumnLabel: 'Symbol'
		}
	});
	var lastPriceSlider = new google.visualization.ControlWrapper(
	{
		controlType: 'NumberRangeFilter',
		containerId: 'lastPriceStockFilterSlider',
		options:
		{
			filterColumnLabel: 'Last',
			ui:
			{
				blockIncrement: 1,
				unitIncrement: 50
			}
		}
	});
	var changePercentSlider = new google.visualization.ControlWrapper(
	{
		controlType: 'NumberRangeFilter',
		containerId: 'changePercentStockFilterSlider',
		options:
		{
			filterColumnLabel: 'Net Change (%)',
			ui:
			{
				blockIncrement: 1,
				unitIncrement: 5
			}
		}
	});
	var changeDollarSlider = new google.visualization.ControlWrapper(
	{
		controlType: 'NumberRangeFilter',
		containerId: 'changeDollarStockFilterSlider',
		options:
		{
			filterColumnLabel: 'Net Change ($)',
			ui:
			{
				blockIncrement: 1,
				unitIncrement: 5
			}
		}
	});
	var openSlider = new google.visualization.ControlWrapper(
	{
		controlType: 'NumberRangeFilter',
		containerId: 'openStockFilterSlider',
		options:
		{
			filterColumnLabel: 'Open',
			ui:
			{
				blockIncrement: 1,
				unitIncrement: 50
			}
		}
	});
	var closeSlider = new google.visualization.ControlWrapper(
	{
		controlType: 'NumberRangeFilter',
		containerId: 'closeStockFilterSlider',
		options:
		{
			filterColumnLabel: 'Prev Close',
			ui:
			{
				blockIncrement: 1,
				unitIncrement: 50
			}
		}
	});
	var volumeSlider = new google.visualization.ControlWrapper(
	{
		controlType: 'NumberRangeFilter',
		containerId: 'volumeStockFilterSlider',
		options:
		{
			filterColumnLabel: 'Volume',
			ui:
			{
				blockIncrement: 10000,
				unitIncrement: 100000
			}
		}
	});
	var averageVolumeSlider = new google.visualization.ControlWrapper(
	{
		controlType: 'NumberRangeFilter',
		containerId: 'averageVolumeStockFilterSlider',
		options:
		{
			filterColumnLabel: 'Average Volume',
			ui:
			{
				blockIncrement: 10000,
				unitIncrement: 100000
			}
		}
	});
	var cssClassNames =
	{
		headerRow: 'dataTableTh',
		tableRow: 'dataTableTdEven',
		oddTableRow: 'dataTableTdOdd',
		hoverTableRow: 'dataTableTdHover',
		selectedTableRow: 'dataTableTdSelected',
		headerCell: 'dataTableThSpan',
		tableCell: 'dataTableTdSpan',
		rowNumberCell: ''
	};
	var table = new google.visualization.ChartWrapper(
	{
		chartType: 'Table',
		containerId: 'stockFilterTable',
		options:
		{
			showRowNumber: false,
			allowHtml: true,
			alternatingRowStyle: true,
			page: 'enable',
			pageSize: getPageSize('stockFilter'),
			sortColumn: 2,
			sortAscending: false,
			cssClassNames: cssClassNames
		}
	});
	var netChangeColorFormatter = new google.visualization.ColorFormat();
	var doubleNumberFormatter = new google.visualization.NumberFormat({decimalSymbol: '.', groupingSymbol: ',', fractionDigits: 2});
	var integerNumberFormatter = new google.visualization.NumberFormat({decimalSymbol: '.', groupingSymbol: ',', fractionDigits: 0});
	
	netChangeColorFormatter.addRange(-9999999, 0, 'red', '00FFFFFF');
	netChangeColorFormatter.addRange(0, 9999999, 'green', '00FFFFFF');
	
	if (data.getNumberOfRows() > 0)
	{
		netChangeColorFormatter.format(data, 2);
		netChangeColorFormatter.format(data, 3);

		doubleNumberFormatter.format(data, 1);
		doubleNumberFormatter.format(data, 2);
		doubleNumberFormatter.format(data, 3);
		doubleNumberFormatter.format(data, 4);
		doubleNumberFormatter.format(data, 5);
		doubleNumberFormatter.format(data, 6);
		doubleNumberFormatter.format(data, 7);
		doubleNumberFormatter.format(data, 8);
		doubleNumberFormatter.format(data, 9);
		doubleNumberFormatter.format(data, 10);
		doubleNumberFormatter.format(data, 11);

		integerNumberFormatter.format(data, 12);
		integerNumberFormatter.format(data, 13);

		dashboard.bind(symbolFilter, table);
		dashboard.bind(lastPriceSlider, table);
		dashboard.bind(changePercentSlider, table);
		dashboard.bind(changeDollarSlider, table);
		dashboard.bind(openSlider, table);
		dashboard.bind(closeSlider, table);
		dashboard.bind(volumeSlider, table);
		dashboard.bind(averageVolumeSlider, table);

		dashboard.draw(data);
	}
}