/**
 * Gregory Pellegrin
 * pellegrin.gregory.work@gmail.com
 */

function getServletAttribute (attributeName)
{
	if (attributeName = (new RegExp ('[?&]' + encodeURIComponent(attributeName) + '=([^&]*)')).exec(location.search))
		return decodeURIComponent(attributeName[1]);
}

function getPageSize (tableType)
{
	var height = $(window).height();
	var filterHeight = 0;
	var dataTableMarginTop = 0;
	
	if (tableType === 'stockFilter')
	{
		filterHeight = 182 + 256 + 250 + 250 + 257 + 257 + 285 + 285;
		dataTableMarginTop = 10;
	}
	
	filterHeight = filterHeight / ($(window).width() * 90 / 100);
	filterHeight = Math.round(filterHeight);
	filterHeight = filterHeight * 59;
	
	height = height - $('header').outerHeight(true)
					- 72	// #indiceSection
					- filterHeight
					- 10	// .tableSection padding
					- dataTableMarginTop
					- 47	// .dataTableTh
					- 35	// pageNumber height
					- 8;
	height = height / 26;	// tr height
	
	return Math.round(height);
}