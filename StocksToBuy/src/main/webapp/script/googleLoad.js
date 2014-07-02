/**
 * Gregory Pellegrin
 * pellegrin.gregory.work@gmail.com
 */

google.load('visualization', '1', {packages: ['table', 'controls']});

google.setOnLoadCallback(indiceTable);
google.setOnLoadCallback(stockValueTable);
google.setOnLoadCallback(stockFilterTable);

function indiceTable ()
{
	var indiceData = new google.visualization.Query('TableIndiceValue', {sendMethod: 'scriptInjection'});
	
	indiceData.setRefreshInterval(5);
	indiceData.send(indiceResponse);
}

function stockValueTable ()
{
	if ((getServletAttribute('section') !== 'stockFilter'))
	{
		var stockValueData = new google.visualization.Query('TableStockValue', {sendMethod: 'scriptInjection'});
		
		stockValueData.setRefreshInterval(10);
		stockValueData.send(stockValueResponse);
	}
}

function stockFilterTable ()
{
	if ((getServletAttribute('section') === 'stockFilter'))
	{
		var stockFilterData = new google.visualization.Query('TableStockValue', {sendMethod: 'scriptInjection'});
		
		stockFilterData.send(stockFilterResponse);
	}
}