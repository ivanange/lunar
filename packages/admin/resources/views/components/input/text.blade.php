<input {{ $attributes->merge([
'type' => 'text',
'class' =>
'form-input block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm
disabled:opacity-50 disabled:cursor-not-allowed',
])->class([
'border-red-400' => !!$error,
]) }}
maxlength="255">
