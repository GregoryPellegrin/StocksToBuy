/**
 * Gregory Pellegrin
 * pellegrin.gregory.work@gmail.com
 */

google.load('visualization', '1', {packages: ['table', 'controls']});

var indiceData;
var stockValueData;
var stockFilterData;

google.setOnLoadCallback(indiceTable);
google.setOnLoadCallback(stockValueTable);
google.setOnLoadCallback(stockFilterTable);

function indiceTable ()
{
	indiceData = new google.visualization.Query('TableIndiceValue', {sendMethod: 'scriptInjection'});
	
	indiceData.setRefreshInterval(5);
	indiceData.send(indiceResponse);
}

function stockValueTable ()
{
	if ((getServletAttribute('section') !== 'stockFilter'))
	{
		stockValueData = new google.visualization.Query('TableStockValue', {sendMethod: 'scriptInjection'});
		
		stockValueData.setRefreshInterval(5);
		stockValueData.send(stockValueResponse);
	}
}

function stockFilterTable ()
{
	if ((getServletAttribute('section') === 'stockFilter'))
	{
		stockFilterData = new google.visualization.Query('TableStockValue', {sendMethod: 'scriptInjection'});
		
		stockFilterData.setRefreshInterval(5);
		stockFilterData.send(stockFilterResponse);
	}
}