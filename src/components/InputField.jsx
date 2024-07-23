function InputField({label, type, value, onChange, placeholder}) {
    return(
        <div className="flex items-center gap-2">
            <label htmlFor="">{label} : </label>

            <input 
                type={type} 
                value={value}
                className="outline-none border-2 border-slate-400 p-1 rounded-lg"
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputField;