<script>
    export let label;
    export let value
</script>

<div>
    <p style="padding: 5px 10px">
        <b>
            {label}:
        </b>
        <span>
            {value || 'N/A'}
        </span>
    </p>
</div>