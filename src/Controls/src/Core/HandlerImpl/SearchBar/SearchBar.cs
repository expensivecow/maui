﻿#nullable disable
using System;

namespace Microsoft.Maui.Controls
{
	public partial class SearchBar
	{
		public static IPropertyMapper<ISearchBar, SearchBarHandler> ControlsSearchBarMapper =
			new PropertyMapper<SearchBar, SearchBarHandler>(SearchBarHandler.Mapper);

		internal static new void RemapForControls()
		{
			// Adjust the mappings to preserve Controls.SearchBar legacy behaviors
#if WINDOWS
			SearchBarHandler.Mapper.ReplaceMapping<SearchBar, ISearchBarHandler>(PlatformConfiguration.WindowsSpecific.SearchBar.IsSpellCheckEnabledProperty.PropertyName, MapIsSpellCheckEnabled);
#elif IOS
			SearchBarHandler.Mapper.ReplaceMapping<SearchBar, ISearchBarHandler>(PlatformConfiguration.iOSSpecific.SearchBar.SearchBarStyleProperty.PropertyName, MapSearchBarStyle);
#endif
			SearchBarHandler.Mapper.ReplaceMapping<SearchBar, ISearchBarHandler>(nameof(Text), MapText);
			SearchBarHandler.Mapper.ReplaceMapping<SearchBar, ISearchBarHandler>(nameof(TextTransform), MapText);

#if ANDROID
			SearchBarHandler.CommandMapper.AppendToMapping(nameof(ISearchBar.Focus), MapFocus);
#endif
		}
	}
}
