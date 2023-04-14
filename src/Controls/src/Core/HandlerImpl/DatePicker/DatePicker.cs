﻿#nullable disable
using System;

namespace Microsoft.Maui.Controls
{
	public partial class DatePicker
	{
		[Obsolete("Use DatePickerHandler.Mapper instead.")]
		public static IPropertyMapper<IDatePicker, DatePickerHandler> ControlsDatePickerMapper = new PropertyMapper<DatePicker, DatePickerHandler>(DatePickerHandler.Mapper)
		{
#if IOS
			[PlatformConfiguration.iOSSpecific.DatePicker.UpdateModeProperty.PropertyName] = MapUpdateMode,
#endif
		};

		internal static new void RemapForControls()
		{
			// Adjust the mappings to preserve Controls.DatePicker legacy behaviors
#if IOS
			DatePickerHandler.Mapper.ReplaceMappingWhen<DatePicker, IDatePickerHandler>(PlatformConfiguration.iOSSpecific.DatePicker.UpdateModeProperty.PropertyName, MapUpdateMode);
#endif
		}
	}
}