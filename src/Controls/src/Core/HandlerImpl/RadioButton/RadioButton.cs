#nullable disable
using System;

namespace Microsoft.Maui.Controls
{
	/// <include file="../../../../docs/Microsoft.Maui.Controls/RadioButton.xml" path="Type[@FullName='Microsoft.Maui.Controls.RadioButton']/Docs/*" />
	public partial class RadioButton
	{
		IMauiContext MauiContext => Handler?.MauiContext ?? throw new InvalidOperationException("MauiContext not set");

		[Obsolete("Use RadioButtonHandler.Mapper instead.")]
		public static IPropertyMapper<RadioButton, RadioButtonHandler> ControlsRadioButtonMapper =
			new PropertyMapper<RadioButton, RadioButtonHandler>(RadioButtonHandler.Mapper)
			{
				[nameof(IRadioButton.Content)] = MapContent
			};

		internal new static void RemapForControls()
		{
			RadioButtonHandler.Mapper.ReplaceMappingWhen<RadioButton, IRadioButtonHandler>(nameof(IRadioButton.Content), MapContent);

#if ANDROID
			RadioButtonHandler.PlatformViewFactory = CreatePlatformView;
#endif
		}
	}
}
